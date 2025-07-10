package com.itstep.hatarent.util;

import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.type.SqlTypes;
import org.hibernate.usertype.UserType;

import java.io.Serializable;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;


public class StringSet implements UserType<Set<String>> {

  @Override
  public int getSqlType() {
    return SqlTypes.VARCHAR;
  }

  @Override
  public Class returnedClass() {
    return Set.class;
  }

  @Override
  public boolean equals(Set x, Set y) {
    return Objects.equals(x, y);
  }

  @Override
  public int hashCode(Set x) {
    return x != null ? x.hashCode() : 0;
  }

  @Override
  public Set<String> nullSafeGet(ResultSet rs, int position, SharedSessionContractImplementor session, Object owner) throws SQLException {
    String value = rs.getString(position);
    if (value == null || value.isEmpty()) return new HashSet<String>();
    return new HashSet<String>(Arrays.asList(value.split(",")));
  }

  @Override
  public void nullSafeSet(PreparedStatement st, Set<String> value, int index, SharedSessionContractImplementor session) throws SQLException {
    if (value == null || value.isEmpty()) {
      st.setNull(index, SqlTypes.VARCHAR);
    } else {
      String joined = String.join(",", value);
      st.setString(index, joined);
    }
  }

  @Override
  public Set<String> deepCopy(Set<String> value) {
    return value != null ? new HashSet<String>(value) : null;
  }

  @Override
  public boolean isMutable() {
    return true;
  }

  @Override
  public Serializable disassemble(Set<String> value) {
    return value != null ? String.join(",", value) : null;
  }

  @Override
  public Set<String> assemble(Serializable cached, Object owner) {
    if (cached == null) return new HashSet<String>();
    return new HashSet<String>(Arrays.asList(((String) cached).split(",")));
  }
}

