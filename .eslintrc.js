export const parser = 'typescript-eslint-parser';
export const plugins = [
    'typescript'
];
export const rules = {
    'eqeqeq': [
        'error',
        'always',
        {
            null: 'ignore'
        }
    ],
    'typescript/class-name-casing': 'error'
};