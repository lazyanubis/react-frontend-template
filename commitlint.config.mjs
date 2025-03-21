// feat: 添加了新的功能
// fix: 修复了 Bug
// docs: 文档注释
// style: 代码格式
// refactor: 重构相同的功能
// perf: 性能优化
// test: 测试相关
// build: 构建相关
// ci: 持续集成修改
// chore: 其他杂项
// revert: 撤销提交
// security: 安全相关

/**
 * <type>[<scope>]: <subject>
 *
 * <body>
 *
 * <footer>
 */
export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [2, 'always', 100], // header 最大长度

        'type-empty': [2, 'never'],
        'type-case': [2, 'always', 'lower-case'],
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert', 'security'],
        ],

        'scope-case': [2, 'always', 'lower-case'],

        'subject-min-length': [2, 'always', 10], // 用于限制提交信息中 subject（描述）的最小长度
        'subject-max-length': [2, 'always', 100], // 用于限制提交信息中 subject 的最大长度
        'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']], // 句子首字母大写、单词首字母大写、无空格单词首字母大写、全部大写
        'subject-empty': [2, 'never'], // subject（描述部分）是否可以为空
        'subject-full-stop': [2, 'never', '.'], // 控制提交信息的 subject（标题描述部分）末尾是否允许或必须包含特定的句点（英文句号 .）

        'body-leading-blank': [1, 'always'], // 用于要求提交信息的 body（正文）部分必须以空行开头。
        'body-max-line-length': [2, 'always', 100],

        'footer-leading-blank': [1, 'always'],
        'footer-max-line-length': [2, 'always', 100],
    },
};
