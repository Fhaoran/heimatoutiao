module.exports = {
    // // 一行最多 120 字符
    // printWidth: 80,
    // // 行尾需要有分号
    // semi: true,
    // // 使用单引号
    // singleQuote: true,
    // // 对象的 key 仅在必要时用引号
    // quoteProps: 'as-needed',
    // // jsx 不使用单引号，而使用双引号
    // jsxSingleQuote: false,
    // // 末尾不需要逗号
    // trailingComma: 'none',
    // // 大括号内的首尾需要空格
    // bracketSpacing: true,
    // // jsx 标签的反尖括号需要换行
    // jsxBracketSameLine: false,
    // // 每个文件格式化的范围是文件的全部内容
    // rangeStart: 0,
    // rangeEnd: Infinity,
    // // 不需要写文件开头的 @prettier
    // requirePragma: false,
    // // 不需要自动在文件开头插入 @prettier
    // insertPragma: false,
    // // 使用默认的折行标准
    // // proseWrap: 'preserve',
    // // 根据显示样式决定 html 要不要折行
    // htmlWhitespaceSensitivity: 'css',
    // // 换行符使用 lf
    // endOfLine: 'lf',

    // 最大长度80个字符
    printWidth: 80,
    // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
    singleQuote: true,
    // 行末分号, 默认true
    semi: true,
    // JSX双引号
    // jsxSingleQuote: false,
    // 尽可能使用尾随逗号（包括函数参数）,默认none,可选 none|es5|all
    // es5 包括es5中的数组、对象
    // all 包括函数对象等所有可选
    trailingComma: 'all',
    // 在对象文字中打印括号之间的空格。 默认true
    bracketSpacing: true,
    // 箭头函数参数括号 默认avoid 可选 avoid| always
    // avoid 能省略括号的时候就省略 例如x => x
    // always 总是有括号
    arrowParens: 'always',
    // 在文件顶部插入一个特殊的 @format 标记，指定文件格式需要被格式化。
    insertPragma: false,
    // 行尾换行格式
    endOfLine: 'auto',
    // html空格敏感度
    htmlWhitespaceSensitivity: 'ignore',
    // tab缩进大小,默认为2
    tabWidth: 2,
    // 使用tab缩进还是空格，默认false
    useTabs: false,
    // vue缩进脚本和样式
    vueIndentScriptAndStyle: false,
    // > 标签放在最后一行的末尾，而不是单独放在下一行 默认false
    // jsxBracketSameLine: true,
};