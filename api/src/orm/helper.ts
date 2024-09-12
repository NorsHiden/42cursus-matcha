class SQLHelpers {
  static whereToString(where: Record<string, any>): {
    clause: string;
    values: any[];
  } {
    const keys = Object.keys(where);
    const clause = keys
      .map((key, index) => `${key} = $${index + 1}`)
      .join(' AND ');
    const values = Object.values(where).map((value) => {
      if (typeof value === 'string') {
        // Escape potentially dangerous characters
        return value.replace(
          /[\0\x08\x09\x1a\n\r"'\\\%]/g,
          (char) => `\\${char}`,
        );
      }
      return value;
    });
    return { clause, values };
  }
}
