const gulp = require('gulp');
const merge = require('gulp-merge-json');
const childProcess = require('child_process');

const i18nFolder = './i18n/';
const languages = [
    'es',
    'gl'
];

gulp.task('i18n', () => {
    return new Promise((resolve, reject) => {
        languages.forEach((lng) => {
            gulp.src(i18nFolder + lng + '**/*.json')
                .pipe(merge({
                    fileName: lng + '.json'
                }))
                .pipe(gulp.dest('src/i18n/'));
        });
        resolve();
    });
});

