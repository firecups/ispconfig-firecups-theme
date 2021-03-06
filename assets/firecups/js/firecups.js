navIcons = [{
        link: "client_list",
        icon: "icon-users"
    }, {
        link: "reseller_list",
        icon: "icon-user-tie",
    },
    {
        link: "client_circle_list",
        icon: "icon-comments",
    },
    {
        link: "client_template_list",
        icon: "icon-clone",
    },
    {
        link: "web_vhost_domain_list",
        icon: "icon-globe"
    }, {
        link: "database_list",
        icon: "icon-box",
    },
    {
        link: "ftp_user_list",
        icon: "icon-user-friends",
    },
    {
        link: "shell_user_list",
        icon: "icon-user-shield",
    },
    {
        link: "web_sites_stats",
        icon: "icon-chart-area",
    },
    {
        link: "mail_domain_list",
        icon: "icon-inbox",
    },
    {
        link: "mail_mailinglist_list",
        icon: "icon-mail-bulk"
    }, {
        link: "spamfilter_whitelist_list",
        icon: "icon-box",
    },
    {
        link: "mail_get_list",
        icon: "icon-envelope-open-text",
    },
    {
        link: "user_quota_stats",
        icon: "icon-chart-pie",
    },
    {
        link: "mail_whitelist_list",
        icon: "icon-sitemap",
    },
    {
        link: "dns_wizard",
        icon: "icon-network-wired",
    },
    {
        link: "dns_soa_list",
        icon: "icon-project-diagram",
    },
    {
        link: "dns_slave_list",
        icon: "icon-layer-group",
    },
    {
        link: "show_sys_state",
        icon: "icon-server",
    },
    {
        link: "type=cpu_info",
        icon: "icon-hockey-puck",
    },
    {
        link: "show_sys_state",
        icon: "icon-chart-line",
    },
    {
        link: "type=mailq",
        icon: "icon-mail-bulk",
    },
    {
        link: "support_message_edit",
        icon: "icon-comments",
    },
    {
        link: "faq_sections_list",
        icon: "icon-question-circle",
    },
    {
        link: "version",
        icon: "icon-lifebuoy",
    },
    {
        link: "user_settings",
        icon: "icon-users",
    },
    {
        link: "import_ispconfig",
        icon: "icon-upload",
    },
    {
        link: "resync",
        icon: "icon-sync",
    },
    {
        link: "users_list",
        icon: "icon-users",
    },
    {
        link: "server_list",
        icon: "icon-server",
    },
    {
        link: "system_config_edit",
        icon: "icon-edit",
    },
    {
        link: "software_repo_list",
        icon: "icon-th-list",
    },
    {
        link: "language_list",
        icon: "icon-globe",
    },
    {
        link: "remote_action_osupdate",
        icon: "icon-cogs",
    }, {
        link: "xmpp_domain_list",
        icon: "icon-comments",
    }
];




function setNavigationIcons() {

    $('.list-group i').each(function (i, obj) {
        link = $(this).parent().data('load-content');
        icon = getIcon(link);
        if (icon) {
            $(this).addClass(icon);
        }
    });
}

function getIcon(link) {

    var icon;

    $.each(navIcons, function (index, value) {
        if (link != undefined && link.match(value.link)) {
            icon = value.icon;
        }
    });
    return icon;
}

function setSelect2Box(element, form) {
    $(element).find(form + " select:not(.chosen-select)").select2({
        placeholder: '',
        width: '100%',
        selectOnBlur: true,
        allowClear: true,
        formatResult: function (o, cont, qry, escapeMarkup) {
            if (o.id && $(o.element).parent().hasClass('flags')) return '<span class="flags flag-' + o.id.toLowerCase() + '">' + escapeMarkup(o.text) + '</span>';
            else if (o.id && $(o.element).parent().hasClass('active-switch')) return '<span class="active active-' + o.id.toLowerCase() + '">' + escapeMarkup(o.text) + '</span>';
            else return escapeMarkup(o.text);
        },
        formatSelection: function (o, cont, escapeMarkup) {
            if (o.id && $(o.element).parent().hasClass('flags')) return '<span class="flags flag-' + o.id.toLowerCase() + '">' + escapeMarkup(o.text) + '</span>';
            else if (o.id && $(o.element).parent().hasClass('active-switch')) return '<span class="active active-' + o.id.toLowerCase() + '">' + escapeMarkup(o.text) + '</span>';
            else return escapeMarkup(o.text);
        }
    }).on('change', function (e) {
        if ($("#pageForm .table #Filter").length > 0) {
            $("#pageForm .table #Filter").trigger('click');
        }
    });
}