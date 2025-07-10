package com.itstep.hatarent.util;

import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.type.SqlTypes;
import org.hibernate.usertype.UserType;

import java.io.Serializable;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.Objects;


public class Rating implements UserType<Byte> {
  @Override
  public int getSqlType() {
    return SqlTypes.VARCHAR;
  }

  @Override
  public Class<Byte> returnedClass() {
    return Byte.class;
  }

  @Override
  public boolean equals(Byte x, Byte y) {
    return Objects.equals(x, y);
  }

  @Override
  public int hashCode(Byte x) {
    return x != null ? x.hashCode() : 0;
  }

  @Override
  public Byte nullSafeGet(ResultSet rs, int position, SharedSessionContractImplementor session, Object owner) throws SQLException {
    String str = rs.getString(position);
    if (rs.wasNull() || str == null || str.isEmpty()) {
      return null;
    }
    return Byte.valueOf(str);
  }

  @Override
  public void nullSafeSet(PreparedStatement st, Byte value, int index, SharedSessionContractImplementor session) throws SQLException {
    if (value == null) {
      st.setNull(index, Types.VARCHAR);
    } else {
      st.setString(index, value.toString());
    }
  }

  @Override
  public Byte deepCopy(Byte value) {
    return value;
  }

  @Override
  public boolean isMutable() {
    return false;
  }

  @Override
  public Serializable disassemble(Byte value) {
    return value;
  }

  @Override
  public Byte assemble(Serializable cached, Object owner) {
    return (Byte) cached;
  }

  @Override
  public Byte replace(Byte original, Byte target, Object owner) {
    return original;
  }
}
