package com.itstep.hatarent.util;

import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.usertype.UserType;
import org.hibernate.type.SqlTypes;

import java.io.Serializable;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;


// TODO: Перевірити/переробити. Не впевнений у правильності цієї імплементацї, але поки працює чудово
public class SqlSetJavaType implements UserType<HashSet> {

  @Override
  public int getSqlType() {
    return SqlTypes.VARCHAR;
  }

  @Override
  public Class<HashSet> returnedClass() {
    return HashSet.class;
  }

  @Override
  public boolean equals(HashSet x, HashSet y) {
    return Objects.equals(x, y);
  }

  @Override
  public int hashCode(HashSet x) {
    return x != null ? x.hashCode() : 0;
  }

  @Override
  public HashSet nullSafeGet(ResultSet rs, int position, SharedSessionContractImplementor session, Object owner) throws SQLException {
    String value = rs.getString(position);
    if (value == null || value.isEmpty()) return new HashSet<>();
    return new HashSet<>(Arrays.asList(value.split(",")));
  }

  @Override
  public void nullSafeSet(PreparedStatement st, HashSet value, int index, SharedSessionContractImplementor session) throws SQLException {
    if (value == null || value.isEmpty()) {
      st.setNull(index, SqlTypes.VARCHAR);
    } else {
      String joined = String.join(",", value);
      st.setString(index, joined);
    }
  }

  @Override
  public HashSet deepCopy(HashSet value) {
    return value != null ? new HashSet<>(value) : null;
  }

  @Override
  public boolean isMutable() {
    return true;
  }

  @Override
  public Serializable disassemble(HashSet value) {
    return value != null ? String.join(",", value) : null;
  }

  @Override
  public HashSet assemble(Serializable cached, Object owner) {
    if (cached == null) return new HashSet<>();
    return new HashSet<>(Arrays.asList(((String) cached).split(",")));
  }
}

