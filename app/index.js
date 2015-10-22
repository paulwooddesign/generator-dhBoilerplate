'use strict';
var util    = require('util');
var path    = require('path');
var yeoman  = require('yeoman-generator');
var yosay   = require('yosay');
var chalk   = require('chalk');

var dhBoilerplateGenerator = yeoman.generators.Base.extend({

    init: function() {
        this.pkg = require('../package.json');
    },

    askFor: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the impressive ' + chalk.red('mh-boilerplate') + ' generator!'
        ));

        var warning =
            '\n This generator is customized for my own needs!'
            + '\n So it may not be the right thing for you!'
            + '\n Keep this in mind when you go further and please read the Readme'
            + '\n'
            + '\n Also this is very early version and maybe there are some bugs :)'
            + '\n';

        console.log(chalk.bold.red(warning));

        var prompts = [
            {
                type: 'input',
                name: 'projectName',
                message: 'Name the project (name of the theme folder in Wordpress)',
                default: 'mh-boilerplate'
            },{
                type: 'input',
                name: 'projectDescription',
                message: 'Short description of the Project`',
                default: 'undefined'
            },{
                type: 'input',
                name: 'projectProxy',
                message: 'Enter the vhost for your Project'
            },{
                type: 'list',
                name: 'projectUsage',
                message: 'Which purpose does this Project have? Choose the appropriate option',
                choices: [
                    "HTML Protoypes",
                    "Wordpress",
                    "Craft"
                ]
            },{
                when: function(response) {
                    return response.projectUsage === 'Wordpress';
                },
                type: 'confirm',
                name: 'projectInstallWordpress',
                message: 'Do yo want to install Wordpress?',
                default: false
            },{
                when: function(response) {
                    return response.projectUsage === 'laravel';
                },
                type: 'confirm',
                name: 'projectInstallCraftCMS',
                message: 'Do you want to install Craft CMS?',
                default: false
            },{
                type: 'input',
                name: 'projectVersion',
                message: 'Project Version Number',
                default: '0.0.1'
            },{
                type: 'input',
                name: 'projectAuthor',
                message: 'Project Author or company',
                default: 'undefined'
            },{
                type: 'input',
                name: 'projectMail',
                message: 'Mailadress of the author',
                default: 'undefined'
            },{
                type: 'input',
                name: 'projectUrl',
                message: 'Author URl',
                default: 'http://...'
            },{
                type: 'input',
                name: 'projectRepo',
                message: 'Git Repo URL',
                default: 'http://...'
            }
        ];

        this.prompt(prompts, function(props) {
            this.projectName = props.projectName;
            this.projectDescription = props.projectDescription;
            this.projectProxy = props.projectProxy;
            this.projectUsage = props.projectUsage;
            this.projectInstallWordpress = props.projectInstallWordpress;
            this.projectInstallLaravel = props.projectInstallLaravel;
            this.projectInstallLaravelFormBoilerplate = props.projectInstallLaravelFormBoilerplate;
            this.projectVersion = props.projectVersion;
            this.projectAuthor = props.projectAuthor;
            this.projectMail = props.projectMail;
            this.projectUrl = props.projectUrl;
            this.projectRepo = props.projectRepo;
            done();
        }.bind(this));

    },

});

module.exports = dhBoilerplateGenerator;