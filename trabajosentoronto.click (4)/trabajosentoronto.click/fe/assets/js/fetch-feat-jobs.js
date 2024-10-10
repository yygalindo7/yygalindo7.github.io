$(document).on('ready', function() {

    load_feat_jobs();
});

function load_feat_jobs() {
    $.ajax(
        fetch_feat_jobs_ajax, {
            data: {
                // 'jobtitle': jobtitle,
                // 'jobtitle_id': jobtitle_id,
                // 'location': search_location,
                // 'geonameid': geonameid,
                'lc': lc
            }

        }
    ).done(function(res) {

        if ('results' in res) {
            $('#ftjbs_title_plchldr').remove();
            $('#ftjbs_title').removeClass('d-none');
            $('#ftjbs_srch_all_plchldr').remove();
            $('#ftjbs_srch_all').removeClass('d-none');
            $('#ftjbs_shwmore_plchdr').remove();
            $('#ftjbs_shwmore').removeClass('d-none');

            for (i = 0; i < 4; i++) {
                if (i < res.results.length) {
                    $("#ftjbs_wrap_" + i + " .ftjbs_title").html("<h4>" + res.results[i].title + "</h4>");

                    if (res.results[i].company.length == 0) {
                        $("#ftjbs_wrap_" + i + " .ftjbs_company").html("<p>&nbsp;</p>");
                    } else {
                        $("#ftjbs_wrap_" + i + " .ftjbs_company").html("<p>" + res.results[i].company + "</p>");
                    }

                    if (res.results[i].location.length == 0) {
                        $("#ftjbs_wrap_" + i + " .ftjbs_location").html("<li class='list-inline-item'>&nbsp;</li>");
                    } else {
                        $("#ftjbs_wrap_" + i + " .ftjbs_location").html("<li class='list-inline-item'><span class='flaticon-location-pin'></span> " + res.results[i].location + "</li>");
                    }

                    if (res.results[i].salary.length == 0) {
                        $("#ftjbs_wrap_" + i + " .ftjbs_salary").html("<li class='list-inline-item'>&nbsp;</li>");
                    } else {
                        $("#ftjbs_wrap_" + i + " .ftjbs_salary").html("<li class='list-inline-item'><span class='flaticon-price pl20'></span> " + res.results[i].salary + "</li>");
                    }

                    $("#ftjbs_wrap_" + i + " .ftjb-btn").attr('href', res.results[i].url).removeClass('d-none');

                } else {
                    $("#ftjbs_wrap_" + i).remove();
                }
            }
        } else {
            $('#featured_jobs_section').remove();
        }

        // console.log(res);

        /*if (res.type == 'JOBS') {

            if (res.results.length == 0) {
                console.log('no results');
            }
            else {

                console.log(res.results);

                if (res.total_results_text.length > 0) {
                    $(".placeholder_total_jobs").replaceWith("<h4 class=\"fz14 mb15\">" + res.total_results_text + "</h4>");
                }
                else {
                    if (first_block_of_job_results == 1) {
                        $(".placeholder_total_jobs").remove();
                    }
                }

                var placeholder_i = ( res.page - 1 ) * res.per_page;

                for (i = 0; i < res.per_page; i++) {
                    if (i < res.results.length) {

                        // clone placeholder for later use
                        var curr_job_result_placeholder = document.querySelector(".job_result_placeholder_" + placeholder_i);
                        var job_results_row_main = document.querySelector('#job_results_row');
                        var dupe_job_result_placeholder = curr_job_result_placeholder.cloneNode(true);
                        dupe_job_result_placeholder.className = "";
                        dupe_job_result_placeholder.classList.add('col-lg-12', 'job_result_placeholder_' + (placeholder_i + res.per_page), 'job_result_hidden_untill_scrolled_to');
                        job_results_row_main.appendChild(dupe_job_result_placeholder);

                        var job_result = res.results[i];

                        // attach JT onmousedown event
                        if ( 'onmousedown' in job_result && 'onmousedown_func' in job_result && typeof job_result.onmousedown_func !== 'undefined' && job_result.onmousedown_func == 'j2m_c' ) {
                            job_result.url = job_result.url + (job_result.url.indexOf('&i=') == -1 ? "&i=1" : "");
                        }

                        $(".job_result_placeholder_" + placeholder_i + " .job_result_title").replaceWith("<h4 class=\"job-title-link ff-inter fz24 fw700\">" + "<a href='" + job_result.url + "' target='_blank' rel='nofollow'>" + job_result.title + "</a>" + "</h4>");
                        $(".job_result_placeholder_" + placeholder_i + " .job_result_description div").remove();
                        $(".job_result_placeholder_" + placeholder_i + " .job_result_description").replaceWith("<p class=\"job-description\">" + job_result.description + "</p>");

                        if (job_result.company.length > 0) {
                            $(".job_result_placeholder_" + placeholder_i + " .job_result_company_placeholder").replaceWith("<h5 class=\"fz16 fw400\">" + job_result.company + "</h5>");
                        }
                        else {
                            $(".job_result_placeholder_" + placeholder_i + " .job_result_company_placeholder").remove();
                        }

                        if (job_result.location.length > 0) {
                            $(".job_result_placeholder_" + placeholder_i + " .job_result_location").replaceWith("<li class=\"list-inline-item\"><span class=\"flaticon-location-pin\"></span> " + job_result.location + "</li>");
                        }
                        else {
                            $(".job_result_placeholder_" + placeholder_i + " .job_result_location").remove();
                        }

                        if (job_result.salary.length > 0) {
                            $(".job_result_placeholder_" + placeholder_i + " .job_result_salary").replaceWith("<li class=\"list-inline-item\"><span class=\"flaticon-price pl20\"></span> " + job_result.salary + "</li>");
                        }
                        else {
                            $(".job_result_placeholder_" + placeholder_i + " .job_result_salary").remove();
                        }

                        $(".job_result_placeholder_" + placeholder_i + " .fj_post").attr('data-click-url', job_result.url);

                        $(".job_result_placeholder_" + placeholder_i + " .fj_post").click(function(e) {
                            e.preventDefault();
                            // window.location = $( this ).attr('data-click-url');
                            window.open($( this ).attr('data-click-url'), '_blank');
                        });

                        $(".job_result_placeholder_" + placeholder_i).removeClass(".job_result_placeholder_" + placeholder_i);
                    }
                    else {
                        $(".job_result_placeholder_" + placeholder_i).remove();
                    }

                    placeholder_i = placeholder_i + 1;
                }

                if (first_block_of_job_results == false) {
                    var curr_job_search_url_after_ajax = new URL(window.location);
                    curr_job_search_url_after_ajax.searchParams.set('page', res.page);
                    window.history.pushState({}, '', curr_job_search_url_after_ajax);
                }



                if (placeholder_i < res.total_results) {

                    if ( placeholder_i < ( ((initial_job_results_page - 1) * res.per_page) + (res.per_page * 10) ) ) {
                        more_job_results_available = true;
                        $('.job_results_scroll_observer').removeClass('job_result_hidden_untill_scrolled_to');
                    }
                    else {
                        var curr_load_more_jobs_url = $('#load_more_jobs a').attr('href');
                        $('#load_more_jobs a').attr('href', curr_load_more_jobs_url + '&page=' + (res.page + 1));
                        $('#load_more_jobs').removeClass('hide_load_more_jobs');
                    }
                }
                else {
                    $('#no_more_job_results_msg').removeClass('hide_no_more_job_results_msg');
                }

                if (first_block_of_job_results) {
                    init_job_results_observer();
                    first_block_of_job_results = false;
                }

            }

        }
        else if (res.type == 'LOCATIONS' && typeof res.choose_location_msg !== "undefined") {
            $(".job_result_placeholder_0, " +
                ".job_result_placeholder_1, " +
                ".job_result_placeholder_2, " +
                ".job_result_placeholder_3, " +
                ".job_result_placeholder_4, " +
                ".job_result_placeholder_5, " +
                ".job_result_placeholder_6, " +
                ".job_result_placeholder_7, " +
                ".job_result_placeholder_8, " +
                ".job_result_placeholder_9, " +
                ".job_result_placeholder_10, " +
                ".job_result_placeholder_11, " +
                ".job_result_placeholder_12, " +
                ".job_result_placeholder_13, " +
                ".job_result_placeholder_14, " +
                ".job_result_placeholder_15, " +
                ".job_result_placeholder_16, " +
                ".job_result_placeholder_17, " +
                ".job_result_placeholder_18, " +
                ".job_result_placeholder_19, " +
                ".placeholder_total_jobs").remove();

            $('#job_results_row').append("<div class=\"col-lg-12\"><div class=\"alert alert-danger mt20\" role=\"alert\"><span class=\"flaticon-location-pin pr10\"></span>" + res.choose_location_msg + "</div></div>");
        }
        else if (res.type == 'NORESULTS' && typeof res.no_jobs_msg !== "undefined") {
            $(".job_result_placeholder_0, " +
                ".job_result_placeholder_1, " +
                ".job_result_placeholder_2, " +
                ".job_result_placeholder_3, " +
                ".job_result_placeholder_4, " +
                ".job_result_placeholder_5, " +
                ".job_result_placeholder_6, " +
                ".job_result_placeholder_7, " +
                ".job_result_placeholder_8, " +
                ".job_result_placeholder_9, " +
                ".job_result_placeholder_10, " +
                ".job_result_placeholder_11, " +
                ".job_result_placeholder_12, " +
                ".job_result_placeholder_13, " +
                ".job_result_placeholder_14, " +
                ".job_result_placeholder_15, " +
                ".job_result_placeholder_16, " +
                ".job_result_placeholder_17, " +
                ".job_result_placeholder_18, " +
                ".job_result_placeholder_19, " +
                ".placeholder_total_jobs").remove();

            $('#job_results_row').append("<div class=\"col-lg-12\"><div class=\"alert alert-danger mt20\" role=\"alert\"><span class=\"flaticon-magnifying-glass pr10\"></span>" + res.no_jobs_msg + "</div></div>");
        }*/



    }).fail(function() {
        $('#featured_jobs_section').remove();
    });
}