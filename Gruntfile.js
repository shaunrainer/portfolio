module.exports = function(grunt) {
	
	grunt.initConfig({
		concat: {
			js: {
				src: [	'bower_components/jquery/dist/jquery.min.js',
						'bower_components/bootstrap/dist/js/bootstrap.min.js',
						'bower_components/scrollreveal/dist/scrollReveal.min.js',
						'bower_components/jquery-validation/dist/jquery.validate.min.js',
						'js/**/*.js'
				],
				dest: 'build/js/scripts.js'
			},
			css: {
				src: [	'bower_components/bootstrap/dist/css/bootstrap.min.css',
						'bower_components/font-awesome/css/font-awesome.min.css',
						'css/**/*.css'
				],
				dest: 'build/css/styles.css'
			}
		},
		watch: {
			js: {
				files: ['js/**/*.js'],
				tasks: ['concat:js']
			},
			css: {
				files: ['css/**/*.css'],
				tasks: ['concat:css']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
};