---
layout: none
---
$(document).ready(function() {
    $.ajax({
        url: 'https://api.github.com/users/{{ site.github_username }}/repos',
        dataType: 'json',
        success: function(data) {
            $('[github]').each(function() {
                let repo = $(this).attr('github');
                let stats = data.find(el => el.name === repo);
                // Insert corresponding stats after star and fork icons
                $(this).siblings('.btn').children('.fa-star').after(' ' + stats.stargazers_count);
                $(this).siblings('.btn').children('.fa-code-branch').after(' ' + stats.forks_count);
            });
        }
    });
});
