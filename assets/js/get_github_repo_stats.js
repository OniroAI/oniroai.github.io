$(document).ready(function() {
    $('[github]').each(function() {
        let repo = $(this).attr('github');
        $.ajax({
            url: `https://api.github.com/repos/${repo}`,
            dataType: 'json',
            success: stats => {
                $(this).siblings('.btn').children('.fa-star').after(' ' + stats.stargazers_count);
                $(this).siblings('.btn').children('.fa-code-branch').after(' ' + stats.forks_count);
            }
        })
    });
});
