'use strict';

var cvApp = angular.module('cvApp');

cvApp.factory('Projects', function () {
    return {
        projects: [
            {
                'title': 'Project 1',
                images: {
                    'thumbnail': 'path/to/thumbnail',
                    'large': 'path/to/large-image'
                },
                'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ducimus harum ipsam modi soluta! Facilis laboriosam qui recusandae rerum tempore? Consequuntur fugiat illo in nam nihil non placeat repellendus unde!',
                'slug': 'project-1',
                'url': 'http://google.com',
                'date': 2013,
                'company': {
                    'name': 'wemake',
                    'url': 'http://we-make.by'
                },
                'technologies': ['html', 'css', 'javascript']
            },
            {
                'title': 'Project 2',
                images: {
                    'thumbnail': 'path/to/thumbnail',
                    'large': 'path/to/large-image'
                },
                'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ducimus harum ipsam modi soluta! Facilis laboriosam qui recusandae rerum tempore? Consequuntur fugiat illo in nam nihil non placeat repellendus unde!',
                'slug': 'project-2',
                'url': 'http://google.com',
                'date': 2013,
                'company': {
                    'name': 'wemake',
                    'url': 'http://we-make.by'
                },
                'technologies': ['html', 'css', 'wordpress']
            },
            {
                'title': 'Project 3',
                images: {
                    'thumbnail': 'path/to/thumbnail',
                    'large': 'path/to/large-image'
                },
                'slug': 'project-3',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ducimus harum ipsam modi soluta! Facilis laboriosam qui recusandae rerum tempore? Consequuntur fugiat illo in nam nihil non placeat repellendus unde!',
                'url': 'http://google.com',
                'date': 2013,
                'company': {
                    'name': 'dizzain',
                    'url': 'http://dizzain.com'
                },
                'technologies': ['html', 'css', 'wordpress']
            },
            {
                'title': 'Project 4',
                images: {
                    'thumbnail': 'path/to/thumbnail',
                    'large': 'path/to/large-image'
                },
                'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ducimus harum ipsam modi soluta! Facilis laboriosam qui recusandae rerum tempore? Consequuntur fugiat illo in nam nihil non placeat repellendus unde!',
                'slug': 'project-4',
                'url': 'http://google.com',
                'date': 2013,
                'company': {
                    'name': 'dizzain',
                    'url': 'http://dizzain.com'
                },
                'technologies': ['html', 'css', 'wordpress']
            },
            {
                'title': 'Project 5',
                images: {
                    'thumbnail': 'path/to/thumbnail',
                    'large': 'path/to/large-image'
                },
                'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ducimus harum ipsam modi soluta! Facilis laboriosam qui recusandae rerum tempore? Consequuntur fugiat illo in nam nihil non placeat repellendus unde!',
                'slug': 'project-5',
                'url': 'http://google.com',
                'date': 2013,
                'company': {
                    'name': 'dizzain',
                    'url': 'http://dizzain.com'
                },
                'technologies': ['html', 'css', 'wordpress']
            },
            {
                'title': 'Project 6',
                images: {
                    'thumbnail': 'path/to/thumbnail',
                    'large': 'path/to/large-image'
                },
                'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ducimus harum ipsam modi soluta! Facilis laboriosam qui recusandae rerum tempore? Consequuntur fugiat illo in nam nihil non placeat repellendus unde!',
                'slug': 'project-6',
                'url': 'http://google.com',
                'date': 2013,
                'company': {
                    'name': 'sl',
                    'url': 'http://startuplabs.com'
                },
                'technologies': ['html', 'css', 'wordpress']
            },
            {
                'title': 'Project 7',
                images: {
                    'thumbnail': 'path/to/thumbnail',
                    'large': 'path/to/large-image'
                },
                'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ducimus harum ipsam modi soluta! Facilis laboriosam qui recusandae rerum tempore? Consequuntur fugiat illo in nam nihil non placeat repellendus unde!',
                'slug': 'project-7',
                'url': 'http://google.com',
                'date': 2013,
                'company': {
                    'name': 'sl',
                    'url': 'http://startuplabs.com'
                },
                'technologies': ['html', 'css', 'wordpress']
            },
            {
                'title': 'Project 8',
                images: {
                    'thumbnail': 'path/to/thumbnail',
                    'large': 'path/to/large-image'
                },
                'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ducimus harum ipsam modi soluta! Facilis laboriosam qui recusandae rerum tempore? Consequuntur fugiat illo in nam nihil non placeat repellendus unde!',
                'slug': 'project-8',
                'url': 'http://google.com',
                'date': 2013,
                'company': {
                    'name': 'personal',
                    'url': 'http://alexbondarev.com'
                },
                'technologies': ['html', 'css', 'wordpress']
            }
        ],
        getProjectsByTechnology: function( technology ){
            var filteredProjects = [];

            angular.forEach(this.projects, function( project ) {
                angular.forEach( project.technologies, function( technologyType ){
                    if( technologyType === technology ) {
                        filteredProjects.push( project );
                    }
                });
            });

            return filteredProjects;
        },
        getProjectBySlug: function( slug ){
            var filteredProjects = {};

            angular.forEach(this.projects, function( project ) {
                if( project.slug === slug ) {
                    filteredProjects = project;
                }
            });

            return filteredProjects;
        }
    };
});