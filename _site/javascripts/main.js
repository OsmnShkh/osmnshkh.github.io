$(document).ready(function(){
                $("#webdev").hover(function()
                {
                    $("#i,#build, #products").css({
                                'color': 'black',
                                'font-weight': 'bold'
                                 });
                    $("#webdev").css({
                                'text-decoration': 'underline'
                                 });
                }, function()
                {
                    $("#i,#build, #products").css({
                                'color': '#7f8c8d',
                                'font-weight': 'none'
                                 });
                    $("#webdev").css({
                                'text-decoration': 'none'
                                 });
                });

                $("#marketer").hover(function()
                {
                    $("#i,#grow, #products").css({
                                'color': 'black',
                                'font-weight': 'bold'
                                 });
                    $("#marketer").css({
                                'text-decoration': 'underline'
                                 });
                }, function()
                {
                    $("#i,#grow, #products").css({
                                'color': '#7f8c8d',
                                'font-weight': 'none'
                                 });
                    $("#marketer").css({
                                'text-decoration': 'none'
                                 });
                });

                $("#entrepreneur").hover(function()
                {
                    $("#mine").css({
                                'color': 'black',
                                'font-weight': 'bold'
                                 });
                    $("#entrepreneur").css({
                                'text-decoration': 'underline'
                                 });
                }, function()
                {
                    $("#mine").css({
                                'color': '#7f8c8d',
                                'font-weight': 'none'
                                 });
                    $("#entrepreneur").css({
                                'text-decoration': 'none'
                                 });
                });
            });