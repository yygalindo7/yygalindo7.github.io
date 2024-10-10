var DateFormatter;
! function() {
    "use strict";
    var e, t, a, n, r;
    e = function(e, t) {
        return "string" == typeof e && "string" == typeof t && e.toLowerCase() === t.toLowerCase()
    }, t = function(e, a, n) {
        var r = e.toString();
        return n = n || "0", r.length < a ? t(n + r, a) : r
    }, a = function(e) {
        var t, n;
        for (e = e || {}, t = 1; t < arguments.length; t++)
            if (n = arguments[t])
                for (var r in n) n.hasOwnProperty(r) && ("object" == typeof n[r] ? a(e[r], n[r]) : e[r] = n[r]);
        return e
    }, n = function(e, t) {
        for (var a = 0; a < t.length; a++)
            if (t[a].toLowerCase() === e.toLowerCase()) return a;
        return -1
    }, r = {
        dateSettings: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            meridiem: ["AM", "PM"],
            ordinal: function(e) {
                var t = e % 10,
                    a = {
                        1: "st",
                        2: "nd",
                        3: "rd"
                    };
                return 1 !== Math.floor(e % 100 / 10) && a[t] ? a[t] : "th"
            }
        },
        separators: /[ \-+\/\.T:@]/g,
        validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
        intParts: /[djwNzmnyYhHgGis]/g,
        tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        tzClip: /[^-+\dA-Z]/g
    }, (DateFormatter = function(e) {
        var t = this,
            n = a(r, e);
        t.dateSettings = n.dateSettings, t.separators = n.separators, t.validParts = n.validParts, t.intParts = n.intParts, t.tzParts = n.tzParts, t.tzClip = n.tzClip
    }).prototype = {
        constructor: DateFormatter,
        getMonth: function(e) {
            var t;
            return 0 === (t = n(e, this.dateSettings.monthsShort) + 1) && (t = n(e, this.dateSettings.months) + 1), t
        },
        parseDate: function(t, a) {
            var n, r, o, i, s, d, u, l, f, c, m = this,
                h = !1,
                g = !1,
                p = m.dateSettings,
                y = {
                    date: null,
                    year: null,
                    month: null,
                    day: null,
                    hour: 0,
                    min: 0,
                    sec: 0
                };
            if (!t) return null;
            if (t instanceof Date) return t;
            if ("U" === a) return (o = parseInt(t)) ? new Date(1e3 * o) : t;
            switch (typeof t) {
                case "number":
                    return new Date(t);
                case "string":
                    break;
                default:
                    return null
            }
            if (!(n = a.match(m.validParts)) || 0 === n.length) throw new Error("Invalid date format definition.");
            for (r = t.replace(m.separators, "\0").split("\0"), o = 0; o < r.length; o++) switch (i = r[o], s = parseInt(i), n[o]) {
                case "y":
                case "Y":
                    if (!s) return null;
                    f = i.length, y.year = 2 === f ? parseInt((70 > s ? "20" : "19") + i) : s, h = !0;
                    break;
                case "m":
                case "n":
                case "M":
                case "F":
                    if (isNaN(s)) {
                        if (!((d = m.getMonth(i)) > 0)) return null;
                        y.month = d
                    } else {
                        if (!(s >= 1 && 12 >= s)) return null;
                        y.month = s
                    }
                    h = !0;
                    break;
                case "d":
                case "j":
                    if (!(s >= 1 && 31 >= s)) return null;
                    y.day = s, h = !0;
                    break;
                case "g":
                case "h":
                    if (c = r[u = n.indexOf("a") > -1 ? n.indexOf("a") : n.indexOf("A") > -1 ? n.indexOf("A") : -1], -1 !== u) l = e(c, p.meridiem[0]) ? 0 : e(c, p.meridiem[1]) ? 12 : -1, s >= 1 && 12 >= s && -1 !== l ? y.hour = s % 12 == 0 ? l : s + l : s >= 0 && 23 >= s && (y.hour = s);
                    else {
                        if (!(s >= 0 && 23 >= s)) return null;
                        y.hour = s
                    }
                    g = !0;
                    break;
                case "G":
                case "H":
                    if (!(s >= 0 && 23 >= s)) return null;
                    y.hour = s, g = !0;
                    break;
                case "i":
                    if (!(s >= 0 && 59 >= s)) return null;
                    y.min = s, g = !0;
                    break;
                case "s":
                    if (!(s >= 0 && 59 >= s)) return null;
                    y.sec = s, g = !0
            }
            if (!0 === h && y.year && y.month && y.day) y.date = new Date(y.year, y.month - 1, y.day, y.hour, y.min, y.sec, 0);
            else {
                if (!0 !== g) return null;
                y.date = new Date(0, 0, 0, y.hour, y.min, y.sec, 0)
            }
            return y.date
        },
        guessDate: function(e, t) {
            if ("string" != typeof e) return e;
            var a, n, r, o, i, s, d = e.replace(this.separators, "\0").split("\0"),
                u = t.match(this.validParts),
                l = new Date,
                f = 0;
            if (!/^[djmn]/g.test(u[0])) return e;
            for (r = 0; r < d.length; r++) {
                if (f = 2, i = d[r], s = parseInt(i.substr(0, 2)), isNaN(s)) return null;
                switch (r) {
                    case 0:
                        "m" === u[0] || "n" === u[0] ? l.setMonth(s - 1) : l.setDate(s);
                        break;
                    case 1:
                        "m" === u[0] || "n" === u[0] ? l.setDate(s) : l.setMonth(s - 1);
                        break;
                    case 2:
                        if (n = l.getFullYear(), f = 4 > (a = i.length) ? a : 4, !(n = parseInt(4 > a ? n.toString().substr(0, 4 - a) + i : i.substr(0, 4)))) return null;
                        l.setFullYear(n);
                        break;
                    case 3:
                        l.setHours(s);
                        break;
                    case 4:
                        l.setMinutes(s);
                        break;
                    case 5:
                        l.setSeconds(s)
                }(o = i.substr(f)).length > 0 && d.splice(r + 1, 0, o)
            }
            return l
        },
        parseFormat: function(e, a) {
            var n, r = this,
                o = r.dateSettings,
                i = /\\?(.?)/gi,
                s = function(e, t) {
                    return n[e] ? n[e]() : t
                };
            return n = {
                d: function() {
                    return t(n.j(), 2)
                },
                D: function() {
                    return o.daysShort[n.w()]
                },
                j: function() {
                    return a.getDate()
                },
                l: function() {
                    return o.days[n.w()]
                },
                N: function() {
                    return n.w() || 7
                },
                w: function() {
                    return a.getDay()
                },
                z: function() {
                    var e = new Date(n.Y(), n.n() - 1, n.j()),
                        t = new Date(n.Y(), 0, 1);
                    return Math.round((e - t) / 864e5)
                },
                W: function() {
                    var e = new Date(n.Y(), n.n() - 1, n.j() - n.N() + 3),
                        a = new Date(e.getFullYear(), 0, 4);
                    return t(1 + Math.round((e - a) / 864e5 / 7), 2)
                },
                F: function() {
                    return o.months[a.getMonth()]
                },
                m: function() {
                    return t(n.n(), 2)
                },
                M: function() {
                    return o.monthsShort[a.getMonth()]
                },
                n: function() {
                    return a.getMonth() + 1
                },
                t: function() {
                    return new Date(n.Y(), n.n(), 0).getDate()
                },
                L: function() {
                    var e = n.Y();
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 1 : 0
                },
                o: function() {
                    var e = n.n(),
                        t = n.W();
                    return n.Y() + (12 === e && 9 > t ? 1 : 1 === e && t > 9 ? -1 : 0)
                },
                Y: function() {
                    return a.getFullYear()
                },
                y: function() {
                    return n.Y().toString().slice(-2)
                },
                a: function() {
                    return n.A().toLowerCase()
                },
                A: function() {
                    var e = n.G() < 12 ? 0 : 1;
                    return o.meridiem[e]
                },
                B: function() {
                    var e = 3600 * a.getUTCHours(),
                        n = 60 * a.getUTCMinutes(),
                        r = a.getUTCSeconds();
                    return t(Math.floor((e + n + r + 3600) / 86.4) % 1e3, 3)
                },
                g: function() {
                    return n.G() % 12 || 12
                },
                G: function() {
                    return a.getHours()
                },
                h: function() {
                    return t(n.g(), 2)
                },
                H: function() {
                    return t(n.G(), 2)
                },
                i: function() {
                    return t(a.getMinutes(), 2)
                },
                s: function() {
                    return t(a.getSeconds(), 2)
                },
                u: function() {
                    return t(1e3 * a.getMilliseconds(), 6)
                },
                e: function() {
                    return /\((.*)\)/.exec(String(a))[1] || "Coordinated Universal Time"
                },
                I: function() {
                    return new Date(n.Y(), 0) - Date.UTC(n.Y(), 0) != new Date(n.Y(), 6) - Date.UTC(n.Y(), 6) ? 1 : 0
                },
                O: function() {
                    var e = a.getTimezoneOffset(),
                        n = Math.abs(e);
                    return (e > 0 ? "-" : "+") + t(100 * Math.floor(n / 60) + n % 60, 4)
                },
                P: function() {
                    var e = n.O();
                    return e.substr(0, 3) + ":" + e.substr(3, 2)
                },
                T: function() {
                    return (String(a).match(r.tzParts) || [""]).pop().replace(r.tzClip, "") || "UTC"
                },
                Z: function() {
                    return 60 * -a.getTimezoneOffset()
                },
                c: function() {
                    return "Y-m-d\\TH:i:sP".replace(i, s)
                },
                r: function() {
                    return "D, d M Y H:i:s O".replace(i, s)
                },
                U: function() {
                    return a.getTime() / 1e3 || 0
                }
            }, s(e, e)
        },
        formatDate: function(e, t) {
            var a, n, r, o, i, s = this,
                d = "";
            if ("string" == typeof e && !(e = s.parseDate(e, t))) return null;
            if (e instanceof Date) {
                for (r = t.length, a = 0; r > a; a++) "S" !== (i = t.charAt(a)) && "\\" !== i && (a > 0 && "\\" === t.charAt(a - 1) ? d += i : (o = s.parseFormat(i, e), a !== r - 1 && s.intParts.test(i) && "S" === t.charAt(a + 1) && (n = parseInt(o) || 0, o += s.dateSettings.ordinal(n)), d += o));
                return d
            }
            return ""
        }
    }
}(),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "jquery-mousewheel"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(e) {
    "use strict";

    function t(e, t, a) {
        this.date = e, this.desc = t, this.style = a
    }
    var a = {
            i18n: {
                ar: {
                    months: ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
                    dayOfWeekShort: ["ن", "ث", "ع", "خ", "ج", "س", "ح"],
                    dayOfWeek: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"]
                },
                ro: {
                    months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
                    dayOfWeekShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
                    dayOfWeek: ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"]
                },
                id: {
                    months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
                    dayOfWeekShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
                    dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
                },
                is: {
                    months: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"],
                    dayOfWeekShort: ["Sun", "Mán", "Þrið", "Mið", "Fim", "Fös", "Lau"],
                    dayOfWeek: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"]
                },
                bg: {
                    months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
                    dayOfWeekShort: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                    dayOfWeek: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"]
                },
                fa: {
                    months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
                    dayOfWeekShort: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
                    dayOfWeek: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه", "یک‌شنبه"]
                },
                ru: {
                    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                    dayOfWeekShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                    dayOfWeek: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
                },
                uk: {
                    months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
                    dayOfWeekShort: ["Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"],
                    dayOfWeek: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]
                },
                en: {
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                el: {
                    months: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
                    dayOfWeekShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
                    dayOfWeek: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]
                },
                de: {
                    months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                    dayOfWeekShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                    dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                nl: {
                    months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                    dayOfWeekShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
                    dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
                },
                tr: {
                    months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
                    dayOfWeekShort: ["Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"],
                    dayOfWeek: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                },
                fr: {
                    months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                    dayOfWeekShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                    dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                es: {
                    months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    dayOfWeekShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
                    dayOfWeek: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
                },
                th: {
                    months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
                    dayOfWeekShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                    dayOfWeek: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"]
                },
                pl: {
                    months: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
                    dayOfWeekShort: ["nd", "pn", "wt", "śr", "cz", "pt", "sb"],
                    dayOfWeek: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                },
                pt: {
                    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                    dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
                    dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
                },
                ch: {
                    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                    dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"]
                },
                se: {
                    months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                    dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]
                },
                km: {
                    months: ["មករា​", "កុម្ភៈ", "មិនា​", "មេសា​", "ឧសភា​", "មិថុនា​", "កក្កដា​", "សីហា​", "កញ្ញា​", "តុលា​", "វិច្ឋិកា​", "ធ្នូ​"],
                    dayOfWeekShort: ["អាទិ​", "ចន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហ​​", "សុក្រ​", "សៅរ៍"],
                    dayOfWeek: ["អាទិត្យ​", "ចន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហស្បតិ៍​", "សុក្រ​", "សៅរ៍"]
                },
                kr: {
                    months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                    dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"],
                    dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                },
                it: {
                    months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                    dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
                    dayOfWeek: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
                },
                da: {
                    months: ["January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December"],
                    dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
                    dayOfWeek: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
                },
                no: {
                    months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
                    dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
                    dayOfWeek: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"]
                },
                ja: {
                    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                    dayOfWeekShort: ["日", "月", "火", "水", "木", "金", "土"],
                    dayOfWeek: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"]
                },
                vi: {
                    months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
                    dayOfWeekShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                    dayOfWeek: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"]
                },
                sl: {
                    months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
                    dayOfWeekShort: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
                    dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"]
                },
                cs: {
                    months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
                    dayOfWeekShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]
                },
                hu: {
                    months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
                    dayOfWeekShort: ["Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"],
                    dayOfWeek: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"]
                },
                az: {
                    months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
                    dayOfWeekShort: ["B", "Be", "Ça", "Ç", "Ca", "C", "Ş"],
                    dayOfWeek: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"]
                },
                bs: {
                    months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
                    dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
                    dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
                },
                ca: {
                    months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
                    dayOfWeekShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
                    dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
                },
                "en-GB": {
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                et: {
                    months: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
                    dayOfWeekShort: ["P", "E", "T", "K", "N", "R", "L"],
                    dayOfWeek: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
                },
                eu: {
                    months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"],
                    dayOfWeekShort: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."],
                    dayOfWeek: ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"]
                },
                fi: {
                    months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
                    dayOfWeekShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
                    dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
                },
                gl: {
                    months: ["Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"],
                    dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"],
                    dayOfWeek: ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"]
                },
                hr: {
                    months: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
                    dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
                    dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
                },
                ko: {
                    months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                    dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"],
                    dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                },
                lt: {
                    months: ["Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"],
                    dayOfWeekShort: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"],
                    dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"]
                },
                lv: {
                    months: ["Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
                    dayOfWeekShort: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"],
                    dayOfWeek: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
                },
                mk: {
                    months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
                    dayOfWeekShort: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
                    dayOfWeek: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"]
                },
                mn: {
                    months: ["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"],
                    dayOfWeekShort: ["Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"],
                    dayOfWeek: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"]
                },
                "pt-BR": {
                    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                    dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                    dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
                },
                sk: {
                    months: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
                    dayOfWeekShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
                    dayOfWeek: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"]
                },
                sq: {
                    months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"],
                    dayOfWeekShort: ["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Shtu"],
                    dayOfWeek: ["E Diel", "E Hënë", "E Martē", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"]
                },
                "sr-YU": {
                    months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
                    dayOfWeekShort: ["Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"],
                    dayOfWeek: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"]
                },
                sr: {
                    months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
                    dayOfWeekShort: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"],
                    dayOfWeek: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"]
                },
                sv: {
                    months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                    dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
                    dayOfWeek: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"]
                },
                "zh-TW": {
                    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                    dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"],
                    dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                zh: {
                    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                    dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"],
                    dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                he: {
                    months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
                    dayOfWeekShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"],
                    dayOfWeek: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון"]
                },
                hy: {
                    months: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"],
                    dayOfWeekShort: ["Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"],
                    dayOfWeek: ["Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ"]
                },
                kg: {
                    months: ["Үчтүн айы", "Бирдин айы", "Жалган Куран", "Чын Куран", "Бугу", "Кулжа", "Теке", "Баш Оона", "Аяк Оона", "Тогуздун айы", "Жетинин айы", "Бештин айы"],
                    dayOfWeekShort: ["Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"],
                    dayOfWeek: ["Жекшемб", "Дүйшөмб", "Шейшемб", "Шаршемб", "Бейшемби", "Жума", "Ишенб"]
                },
                rm: {
                    months: ["Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"],
                    dayOfWeekShort: ["Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"],
                    dayOfWeek: ["Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"]
                },
                ka: {
                    months: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"],
                    dayOfWeekShort: ["კვ", "ორშ", "სამშ", "ოთხ", "ხუთ", "პარ", "შაბ"],
                    dayOfWeek: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"]
                }
            },
            ownerDocument: document,
            contentWindow: window,
            value: "",
            rtl: !1,
            format: "Y/m/d H:i",
            formatTime: "H:i",
            formatDate: "Y/m/d",
            startDate: !1,
            step: 60,
            monthChangeSpinner: !0,
            closeOnDateSelect: !1,
            closeOnTimeSelect: !0,
            closeOnWithoutClick: !0,
            closeOnInputClick: !0,
            timepicker: !0,
            datepicker: !0,
            weeks: !1,
            defaultTime: !1,
            defaultDate: !1,
            minDate: !1,
            maxDate: !1,
            minTime: !1,
            maxTime: !1,
            disabledMinTime: !1,
            disabledMaxTime: !1,
            allowTimes: [],
            opened: !1,
            initTime: !0,
            inline: !1,
            theme: "",
            onSelectDate: function() {},
            onSelectTime: function() {},
            onChangeMonth: function() {},
            onGetWeekOfYear: function() {},
            onChangeYear: function() {},
            onChangeDateTime: function() {},
            onShow: function() {},
            onClose: function() {},
            onGenerate: function() {},
            withoutCopyright: !0,
            inverseButton: !1,
            hours12: !1,
            next: "xdsoft_next",
            prev: "xdsoft_prev",
            dayOfWeekStart: 0,
            parentID: "body",
            timeHeightInTimePicker: 25,
            timepickerScrollbar: !0,
            todayButton: !0,
            prevButton: !0,
            nextButton: !0,
            defaultSelect: !0,
            scrollMonth: !0,
            scrollTime: !0,
            scrollInput: !0,
            lazyInit: !1,
            mask: !1,
            validateOnBlur: !0,
            allowBlank: !0,
            yearStart: 1950,
            yearEnd: 2050,
            monthStart: 0,
            monthEnd: 11,
            style: "",
            id: "",
            fixed: !1,
            roundTime: "round",
            className: "",
            weekends: [],
            highlightedDates: [],
            highlightedPeriods: [],
            allowDates: [],
            allowDateRe: null,
            disabledDates: [],
            disabledWeekDays: [],
            yearOffset: 0,
            beforeShowDay: null,
            enterLikeTab: !0,
            showApplyButton: !1
        },
        n = null,
        r = "en",
        o = {
            meridiem: ["AM", "PM"]
        },
        i = function() {
            var t = a.i18n[r],
                i = {
                    days: t.dayOfWeek,
                    daysShort: t.dayOfWeekShort,
                    months: t.months,
                    monthsShort: e.map(t.months, function(e) {
                        return e.substring(0, 3)
                    })
                };
            "function" == typeof DateFormatter && (n = new DateFormatter({
                dateSettings: e.extend({}, o, i)
            }))
        };
    e.datetimepicker = {
        setLocale: function(e) {
            var t = a.i18n[e] ? e : "en";
            r != t && (r = t, i())
        },
        setDateFormatter: function(e) {
            n = e
        },
        RFC_2822: "D, d M Y H:i:s O",
        ATOM: "Y-m-dTH:i:sP",
        ISO_8601: "Y-m-dTH:i:sO",
        RFC_822: "D, d M y H:i:s O",
        RFC_850: "l, d-M-y H:i:s T",
        RFC_1036: "D, d M y H:i:s O",
        RFC_1123: "D, d M Y H:i:s O",
        RSS: "D, d M Y H:i:s O",
        W3C: "Y-m-dTH:i:sP"
    }, i(), window.getComputedStyle || (window.getComputedStyle = function(e, t) {
        return this.el = e, this.getPropertyValue = function(t) {
            var a = /(\-([a-z]){1})/g;
            return "float" === t && (t = "styleFloat"), a.test(t) && (t = t.replace(a, function(e, t, a) {
                return a.toUpperCase()
            })), e.currentStyle[t] || null
        }, this
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
        var a, n;
        for (a = t || 0, n = this.length; n > a; a += 1)
            if (this[a] === e) return a;
        return -1
    }), Date.prototype.countDaysInMonth = function() {
        return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate()
    }, e.fn.xdsoftScroller = function(t, a) {
        return this.each(function() {
            var n, r, o, i, s, d = e(this),
                u = function(e) {
                    var t, a = {
                        x: 0,
                        y: 0
                    };
                    return "touchstart" === e.type || "touchmove" === e.type || "touchend" === e.type || "touchcancel" === e.type ? (t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0], a.x = t.clientX, a.y = t.clientY) : ("mousedown" === e.type || "mouseup" === e.type || "mousemove" === e.type || "mouseover" === e.type || "mouseout" === e.type || "mouseenter" === e.type || "mouseleave" === e.type) && (a.x = e.clientX, a.y = e.clientY), a
                },
                l = 100,
                f = !1,
                c = 0,
                m = 0,
                h = 0,
                g = !1,
                p = 0,
                y = function() {};
            return "hide" === a ? void d.find(".xdsoft_scrollbar").hide() : (e(this).hasClass("xdsoft_scroller_box") || (n = d.children().eq(0), r = d[0].clientHeight, o = n[0].offsetHeight, i = e('<div class="xdsoft_scrollbar"></div>'), s = e('<div class="xdsoft_scroller"></div>'), i.append(s), d.addClass("xdsoft_scroller_box").append(i), y = function(e) {
                var t = u(e).y - c + p;
                0 > t && (t = 0), t + s[0].offsetHeight > h && (t = h - s[0].offsetHeight), d.trigger("scroll_element.xdsoft_scroller", [l ? t / l : 0])
            }, s.on("touchstart.xdsoft_scroller mousedown.xdsoft_scroller", function(n) {
                r || d.trigger("resize_scroll.xdsoft_scroller", [a]), c = u(n).y, p = parseInt(s.css("margin-top"), 10), h = i[0].offsetHeight, "mousedown" === n.type || "touchstart" === n.type ? (t.ownerDocument && e(t.ownerDocument.body).addClass("xdsoft_noselect"), e([t.ownerDocument.body, t.contentWindow]).on("touchend mouseup.xdsoft_scroller", function a() {
                    e([t.ownerDocument.body, t.contentWindow]).off("touchend mouseup.xdsoft_scroller", a).off("mousemove.xdsoft_scroller", y).removeClass("xdsoft_noselect")
                }), e(t.ownerDocument.body).on("mousemove.xdsoft_scroller", y)) : (g = !0, n.stopPropagation(), n.preventDefault())
            }).on("touchmove", function(e) {
                g && (e.preventDefault(), y(e))
            }).on("touchend touchcancel", function() {
                g = !1, p = 0
            }), d.on("scroll_element.xdsoft_scroller", function(e, t) {
                r || d.trigger("resize_scroll.xdsoft_scroller", [t, !0]), t = t > 1 ? 1 : 0 > t || isNaN(t) ? 0 : t, s.css("margin-top", l * t), setTimeout(function() {
                    n.css("marginTop", -parseInt((n[0].offsetHeight - r) * t, 10))
                }, 10)
            }).on("resize_scroll.xdsoft_scroller", function(e, t, a) {
                var u, f;
                r = d[0].clientHeight, o = n[0].offsetHeight, f = (u = r / o) * i[0].offsetHeight, u > 1 ? s.hide() : (s.show(), s.css("height", parseInt(f > 10 ? f : 10, 10)), l = i[0].offsetHeight - s[0].offsetHeight, !0 !== a && d.trigger("scroll_element.xdsoft_scroller", [t || Math.abs(parseInt(n.css("marginTop"), 10)) / (o - r)]))
            }), d.on("mousewheel", function(e) {
                var t = Math.abs(parseInt(n.css("marginTop"), 10));
                return 0 > (t -= 20 * e.deltaY) && (t = 0), d.trigger("scroll_element.xdsoft_scroller", [t / (o - r)]), e.stopPropagation(), !1
            }), d.on("touchstart", function(e) {
                f = u(e), m = Math.abs(parseInt(n.css("marginTop"), 10))
            }), d.on("touchmove", function(e) {
                if (f) {
                    e.preventDefault();
                    var t = u(e);
                    d.trigger("scroll_element.xdsoft_scroller", [(m - (t.y - f.y)) / (o - r)])
                }
            }), d.on("touchend touchcancel", function() {
                f = !1, m = 0
            })), void d.trigger("resize_scroll.xdsoft_scroller", [a]))
        })
    }, e.fn.datetimepicker = function(o, i) {
        var s, d, u = this,
            l = 48,
            f = 57,
            c = 96,
            m = 105,
            h = 17,
            g = 46,
            p = 13,
            y = 27,
            D = 8,
            v = 37,
            b = 38,
            k = 39,
            x = 40,
            T = 9,
            S = 116,
            w = 65,
            O = 67,
            M = 86,
            W = 90,
            _ = 89,
            C = !1,
            F = e.isPlainObject(o) || !o ? e.extend(!0, {}, a, o) : e.extend(!0, {}, a),
            P = 0;
        return s = function(a) {
            function i() {
                var e, t = !1;
                return F.startDate ? t = Y.strToDate(F.startDate) : (t = F.value || (a && a.val && a.val() ? a.val() : "")) ? t = Y.strToDateTime(t) : F.defaultDate && (t = Y.strToDateTime(F.defaultDate), F.defaultTime && (e = Y.strtotime(F.defaultTime), t.setHours(e.getHours()), t.setMinutes(e.getMinutes()))), t && Y.isValidDate(t) ? H.data("changed", !0) : t = "", t || 0
            }

            function s(t) {
                var n = function(e, t) {
                        var a = e.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, "\\$1").replace(/_/g, "{digit+}").replace(/([0-9]{1})/g, "{digit$1}").replace(/\{digit([0-9]{1})\}/g, "[0-$1_]{1}").replace(/\{digit[\+]\}/g, "[0-9_]{1}");
                        return new RegExp(a).test(t)
                    },
                    r = function(e, a) {
                        if (!(e = "string" == typeof e || e instanceof String ? t.ownerDocument.getElementById(e) : e)) return !1;
                        if (e.createTextRange) {
                            var n = e.createTextRange();
                            return n.collapse(!0), n.moveEnd("character", a), n.moveStart("character", a), n.select(), !0
                        }
                        return !!e.setSelectionRange && (e.setSelectionRange(a, a), !0)
                    };
                t.mask && a.off("keydown.xdsoft"), !0 === t.mask && ("undefined" != typeof moment ? t.mask = t.format.replace(/Y{4}/g, "9999").replace(/Y{2}/g, "99").replace(/M{2}/g, "19").replace(/D{2}/g, "39").replace(/H{2}/g, "29").replace(/m{2}/g, "59").replace(/s{2}/g, "59") : t.mask = t.format.replace(/Y/g, "9999").replace(/F/g, "9999").replace(/m/g, "19").replace(/d/g, "39").replace(/H/g, "29").replace(/i/g, "59").replace(/s/g, "59")), "string" === e.type(t.mask) && (n(t.mask, a.val()) || (a.val(t.mask.replace(/[0-9]/g, "_")), r(a[0], 0)), a.on("keydown.xdsoft", function(o) {
                    var i, s, d = this.value,
                        u = o.which;
                    if (u >= l && f >= u || u >= c && m >= u || u === D || u === g) {
                        for (i = function(e) {
                                try {
                                    if (t.ownerDocument.selection && t.ownerDocument.selection.createRange) return t.ownerDocument.selection.createRange().getBookmark().charCodeAt(2) - 2;
                                    if (e.setSelectionRange) return e.selectionStart
                                } catch (e) {
                                    return 0
                                }
                            }(this), s = u !== D && u !== g ? String.fromCharCode(u >= c && m >= u ? u - l : u) : "_", u !== D && u !== g || !i || (i -= 1, s = "_");
                            /[^0-9_]/.test(t.mask.substr(i, 1)) && i < t.mask.length && i > 0;) i += u === D || u === g ? -1 : 1;
                        if (d = d.substr(0, i) + s + d.substr(i + 1), "" === e.trim(d)) d = t.mask.replace(/[0-9]/g, "_");
                        else if (i === t.mask.length) return o.preventDefault(), !1;
                        for (i += u === D || u === g ? 0 : 1;
                            /[^0-9_]/.test(t.mask.substr(i, 1)) && i < t.mask.length && i > 0;) i += u === D || u === g ? -1 : 1;
                        n(t.mask, d) ? (this.value = d, r(this, i)) : "" === e.trim(d) ? this.value = t.mask.replace(/[0-9]/g, "_") : a.trigger("error_input.xdsoft")
                    } else if (-1 !== [w, O, M, W, _].indexOf(u) && C || -1 !== [y, b, x, v, k, S, h, T, p].indexOf(u)) return !0;
                    return o.preventDefault(), !1
                }))
            }
            var d, u, P, A, Y, j, H = e('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
                J = e('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
                z = e('<div class="xdsoft_datepicker active"></div>'),
                I = e('<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"></button></div>'),
                N = e('<div class="xdsoft_calendar"></div>'),
                L = e('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
                E = L.find(".xdsoft_time_box").eq(0),
                R = e('<div class="xdsoft_time_variant"></div>'),
                B = e('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),
                V = e('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
                G = e('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
                U = !1,
                q = 0;
            F.id && H.attr("id", F.id), F.style && H.attr("style", F.style), F.weeks && H.addClass("xdsoft_showweeks"), F.rtl && H.addClass("xdsoft_rtl"), H.addClass("xdsoft_" + F.theme), H.addClass(F.className), I.find(".xdsoft_month span").after(V), I.find(".xdsoft_year span").after(G), I.find(".xdsoft_month,.xdsoft_year").on("touchstart mousedown.xdsoft", function(t) {
                var a, n, r = e(this).find(".xdsoft_select").eq(0),
                    o = 0,
                    i = 0,
                    s = r.is(":visible");
                for (I.find(".xdsoft_select").hide(), Y.currentTime && (o = Y.currentTime[e(this).hasClass("xdsoft_month") ? "getMonth" : "getFullYear"]()), r[s ? "hide" : "show"](), a = r.find("div.xdsoft_option"), n = 0; n < a.length && a.eq(n).data("value") !== o; n += 1) i += a[0].offsetHeight;
                return r.xdsoftScroller(F, i / (r.children()[0].offsetHeight - r[0].clientHeight)), t.stopPropagation(), !1
            }), I.find(".xdsoft_select").xdsoftScroller(F).on("touchstart mousedown.xdsoft", function(e) {
                e.stopPropagation(), e.preventDefault()
            }).on("touchstart mousedown.xdsoft", ".xdsoft_option", function() {
                (void 0 === Y.currentTime || null === Y.currentTime) && (Y.currentTime = Y.now());
                var t = Y.currentTime.getFullYear();
                Y && Y.currentTime && Y.currentTime[e(this).parent().parent().hasClass("xdsoft_monthselect") ? "setMonth" : "setFullYear"](e(this).data("value")), e(this).parent().parent().hide(), H.trigger("xchange.xdsoft"), F.onChangeMonth && e.isFunction(F.onChangeMonth) && F.onChangeMonth.call(H, Y.currentTime, H.data("input")), t !== Y.currentTime.getFullYear() && e.isFunction(F.onChangeYear) && F.onChangeYear.call(H, Y.currentTime, H.data("input"))
            }), H.getValue = function() {
                return Y.getCurrentTime()
            }, H.setOptions = function(r) {
                var o = {};
                F = e.extend(!0, {}, F, r), r.allowTimes && e.isArray(r.allowTimes) && r.allowTimes.length && (F.allowTimes = e.extend(!0, [], r.allowTimes)), r.weekends && e.isArray(r.weekends) && r.weekends.length && (F.weekends = e.extend(!0, [], r.weekends)), r.allowDates && e.isArray(r.allowDates) && r.allowDates.length && (F.allowDates = e.extend(!0, [], r.allowDates)), r.allowDateRe && "[object String]" === Object.prototype.toString.call(r.allowDateRe) && (F.allowDateRe = new RegExp(r.allowDateRe)), r.highlightedDates && e.isArray(r.highlightedDates) && r.highlightedDates.length && (e.each(r.highlightedDates, function(a, r) {
                    var i, s = e.map(r.split(","), e.trim),
                        d = new t(n.parseDate(s[0], F.formatDate), s[1], s[2]),
                        u = n.formatDate(d.date, F.formatDate);
                    void 0 !== o[u] ? (i = o[u].desc) && i.length && d.desc && d.desc.length && (o[u].desc = i + "\n" + d.desc) : o[u] = d
                }), F.highlightedDates = e.extend(!0, [], o)), r.highlightedPeriods && e.isArray(r.highlightedPeriods) && r.highlightedPeriods.length && (o = e.extend(!0, [], F.highlightedDates), e.each(r.highlightedPeriods, function(a, r) {
                    var i, s, d, u, l, f, c;
                    if (e.isArray(r)) i = r[0], s = r[1], d = r[2], c = r[3];
                    else {
                        var m = e.map(r.split(","), e.trim);
                        i = n.parseDate(m[0], F.formatDate), s = n.parseDate(m[1], F.formatDate), d = m[2], c = m[3]
                    }
                    for (; s >= i;) u = new t(i, d, c), l = n.formatDate(i, F.formatDate), i.setDate(i.getDate() + 1), void 0 !== o[l] ? (f = o[l].desc) && f.length && u.desc && u.desc.length && (o[l].desc = f + "\n" + u.desc) : o[l] = u
                }), F.highlightedDates = e.extend(!0, [], o)), r.disabledDates && e.isArray(r.disabledDates) && r.disabledDates.length && (F.disabledDates = e.extend(!0, [], r.disabledDates)), r.disabledWeekDays && e.isArray(r.disabledWeekDays) && r.disabledWeekDays.length && (F.disabledWeekDays = e.extend(!0, [], r.disabledWeekDays)), !F.open && !F.opened || F.inline || a.trigger("open.xdsoft"), F.inline && (U = !0, H.addClass("xdsoft_inline"), a.after(H).hide()), F.inverseButton && (F.next = "xdsoft_prev", F.prev = "xdsoft_next"), F.datepicker ? z.addClass("active") : z.removeClass("active"), F.timepicker ? L.addClass("active") : L.removeClass("active"), F.value && (Y.setCurrentTime(F.value), a && a.val && a.val(Y.str)), isNaN(F.dayOfWeekStart) ? F.dayOfWeekStart = 0 : F.dayOfWeekStart = parseInt(F.dayOfWeekStart, 10) % 7, F.timepickerScrollbar || E.xdsoftScroller(F, "hide"), F.minDate && /^[\+\-](.*)$/.test(F.minDate) && (F.minDate = n.formatDate(Y.strToDateTime(F.minDate), F.formatDate)), F.maxDate && /^[\+\-](.*)$/.test(F.maxDate) && (F.maxDate = n.formatDate(Y.strToDateTime(F.maxDate), F.formatDate)), B.toggle(F.showApplyButton), I.find(".xdsoft_today_button").css("visibility", F.todayButton ? "visible" : "hidden"), I.find("." + F.prev).css("visibility", F.prevButton ? "visible" : "hidden"), I.find("." + F.next).css("visibility", F.nextButton ? "visible" : "hidden"), s(F), F.validateOnBlur && a.off("blur.xdsoft").on("blur.xdsoft", function() {
                    if (F.allowBlank && (!e.trim(e(this).val()).length || "string" == typeof F.mask && e.trim(e(this).val()) === F.mask.replace(/[0-9]/g, "_"))) e(this).val(null), H.data("xdsoft_datetime").empty();
                    else {
                        var t = n.parseDate(e(this).val(), F.format);
                        if (t) e(this).val(n.formatDate(t, F.format));
                        else {
                            var a = +[e(this).val()[0], e(this).val()[1]].join(""),
                                r = +[e(this).val()[2], e(this).val()[3]].join("");
                            !F.datepicker && F.timepicker && a >= 0 && 24 > a && r >= 0 && 60 > r ? e(this).val([a, r].map(function(e) {
                                return e > 9 ? e : "0" + e
                            }).join(":")) : e(this).val(n.formatDate(Y.now(), F.format))
                        }
                        H.data("xdsoft_datetime").setCurrentTime(e(this).val())
                    }
                    H.trigger("changedatetime.xdsoft"), H.trigger("close.xdsoft")
                }), F.dayOfWeekStartPrev = 0 === F.dayOfWeekStart ? 6 : F.dayOfWeekStart - 1, H.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft")
            }, H.data("options", F).on("touchstart mousedown.xdsoft", function(e) {
                return e.stopPropagation(), e.preventDefault(), G.hide(), V.hide(), !1
            }), E.append(R), E.xdsoftScroller(F), H.on("afterOpen.xdsoft", function() {
                E.xdsoftScroller(F)
            }), H.append(z).append(L), !0 !== F.withoutCopyright && H.append(J), z.append(I).append(N).append(B), e(F.parentID).append(H), Y = new function() {
                var t = this;
                t.now = function(e) {
                    var a, n, r = new Date;
                    return !e && F.defaultDate && (a = t.strToDateTime(F.defaultDate), r.setDate(1), r.setFullYear(a.getFullYear()), r.setMonth(a.getMonth()), r.setDate(a.getDate())), F.yearOffset && r.setFullYear(r.getFullYear() + F.yearOffset), !e && F.defaultTime && (n = t.strtotime(F.defaultTime), r.setHours(n.getHours()), r.setMinutes(n.getMinutes())), r
                }, t.isValidDate = function(e) {
                    return "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e.getTime())
                }, t.setCurrentTime = function(e, a) {
                    "string" == typeof e ? t.currentTime = t.strToDateTime(e) : t.isValidDate(e) ? t.currentTime = e : e || a || !F.allowBlank ? t.currentTime = t.now() : t.currentTime = null, H.trigger("xchange.xdsoft")
                }, t.empty = function() {
                    t.currentTime = null
                }, t.getCurrentTime = function(e) {
                    return t.currentTime
                }, t.nextMonth = function() {
                    (void 0 === t.currentTime || null === t.currentTime) && (t.currentTime = t.now());
                    var a, n = t.currentTime.getMonth() + 1;
                    return 12 === n && (t.currentTime.setFullYear(t.currentTime.getFullYear() + 1), n = 0), a = t.currentTime.getFullYear(), t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), n + 1, 0).getDate(), t.currentTime.getDate())), t.currentTime.setMonth(n), F.onChangeMonth && e.isFunction(F.onChangeMonth) && F.onChangeMonth.call(H, Y.currentTime, H.data("input")), a !== t.currentTime.getFullYear() && e.isFunction(F.onChangeYear) && F.onChangeYear.call(H, Y.currentTime, H.data("input")), H.trigger("xchange.xdsoft"), n
                }, t.prevMonth = function() {
                    (void 0 === t.currentTime || null === t.currentTime) && (t.currentTime = t.now());
                    var a = t.currentTime.getMonth() - 1;
                    return -1 === a && (t.currentTime.setFullYear(t.currentTime.getFullYear() - 1), a = 11), t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), a + 1, 0).getDate(), t.currentTime.getDate())), t.currentTime.setMonth(a), F.onChangeMonth && e.isFunction(F.onChangeMonth) && F.onChangeMonth.call(H, Y.currentTime, H.data("input")), H.trigger("xchange.xdsoft"), a
                }, t.getWeekOfYear = function(t) {
                    if (F.onGetWeekOfYear && e.isFunction(F.onGetWeekOfYear)) {
                        var a = F.onGetWeekOfYear.call(H, t);
                        if (void 0 !== a) return a
                    }
                    var n = new Date(t.getFullYear(), 0, 1);
                    return 4 != n.getDay() && n.setMonth(0, 1 + (4 - n.getDay() + 7) % 7), Math.ceil(((t - n) / 864e5 + n.getDay() + 1) / 7)
                }, t.strToDateTime = function(e) {
                    var a, r, o = [];
                    return e && e instanceof Date && t.isValidDate(e) ? e : ((o = /^(\+|\-)(.*)$/.exec(e)) && (o[2] = n.parseDate(o[2], F.formatDate)), o && o[2] ? (a = o[2].getTime() - 6e4 * o[2].getTimezoneOffset(), r = new Date(t.now(!0).getTime() + parseInt(o[1] + "1", 10) * a)) : r = e ? n.parseDate(e, F.format) : t.now(), t.isValidDate(r) || (r = t.now()), r)
                }, t.strToDate = function(e) {
                    if (e && e instanceof Date && t.isValidDate(e)) return e;
                    var a = e ? n.parseDate(e, F.formatDate) : t.now(!0);
                    return t.isValidDate(a) || (a = t.now(!0)), a
                }, t.strtotime = function(e) {
                    if (e && e instanceof Date && t.isValidDate(e)) return e;
                    var a = e ? n.parseDate(e, F.formatTime) : t.now(!0);
                    return t.isValidDate(a) || (a = t.now(!0)), a
                }, t.str = function() {
                    return n.formatDate(t.currentTime, F.format)
                }, t.currentTime = this.now()
            }, B.on("touchend click", function(e) {
                e.preventDefault(), H.data("changed", !0), Y.setCurrentTime(i()), a.val(Y.str()), H.trigger("close.xdsoft")
            }), I.find(".xdsoft_today_button").on("touchend mousedown.xdsoft", function() {
                H.data("changed", !0), Y.setCurrentTime(0, !0), H.trigger("afterOpen.xdsoft")
            }).on("dblclick.xdsoft", function() {
                var e, t, n = Y.getCurrentTime();
                n = new Date(n.getFullYear(), n.getMonth(), n.getDate()), e = Y.strToDate(F.minDate), (e = new Date(e.getFullYear(), e.getMonth(), e.getDate())) > n || (t = Y.strToDate(F.maxDate), n > (t = new Date(t.getFullYear(), t.getMonth(), t.getDate())) || (a.val(Y.str()), a.trigger("change"), H.trigger("close.xdsoft")))
            }), I.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function() {
                var t = e(this),
                    a = 0,
                    n = !1;
                ! function e(r) {
                    t.hasClass(F.next) ? Y.nextMonth() : t.hasClass(F.prev) && Y.prevMonth(), F.monthChangeSpinner && (n || (a = setTimeout(e, r || 100)))
                }(500), e([F.ownerDocument.body, F.contentWindow]).on("touchend mouseup.xdsoft", function t() {
                    clearTimeout(a), n = !0, e([F.ownerDocument.body, F.contentWindow]).off("touchend mouseup.xdsoft", t)
                })
            }), L.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function() {
                var t = e(this),
                    a = 0,
                    n = !1,
                    r = 110;
                ! function e(o) {
                    var i = E[0].clientHeight,
                        s = R[0].offsetHeight,
                        d = Math.abs(parseInt(R.css("marginTop"), 10));
                    t.hasClass(F.next) && s - i - F.timeHeightInTimePicker >= d ? R.css("marginTop", "-" + (d + F.timeHeightInTimePicker) + "px") : t.hasClass(F.prev) && d - F.timeHeightInTimePicker >= 0 && R.css("marginTop", "-" + (d - F.timeHeightInTimePicker) + "px"), E.trigger("scroll_element.xdsoft_scroller", [Math.abs(parseInt(R[0].style.marginTop, 10) / (s - i))]), r = r > 10 ? 10 : r - 10, n || (a = setTimeout(e, o || r))
                }(500), e([F.ownerDocument.body, F.contentWindow]).on("touchend mouseup.xdsoft", function t() {
                    clearTimeout(a), n = !0, e([F.ownerDocument.body, F.contentWindow]).off("touchend mouseup.xdsoft", t)
                })
            }), d = 0, H.on("xchange.xdsoft", function(t) {
                clearTimeout(d), d = setTimeout(function() {
                    if (void 0 === Y.currentTime || null === Y.currentTime) {
                        if (F.allowBlank) return;
                        Y.currentTime = Y.now()
                    }
                    for (var t, i, s, d, u, l, f, c, m, h, g = "", p = new Date(Y.currentTime.getFullYear(), Y.currentTime.getMonth(), 1, 12, 0, 0), y = 0, D = Y.now(), v = !1, b = !1, k = [], x = !0, T = ""; p.getDay() !== F.dayOfWeekStart;) p.setDate(p.getDate() - 1);
                    for (g += "<table><thead><tr>", F.weeks && (g += "<th></th>"), t = 0; 7 > t; t += 1) g += "<th>" + F.i18n[r].dayOfWeekShort[(t + F.dayOfWeekStart) % 7] + "</th>";
                    for (g += "</tr></thead>", g += "<tbody>", !1 !== F.maxDate && (v = Y.strToDate(F.maxDate), v = new Date(v.getFullYear(), v.getMonth(), v.getDate(), 23, 59, 59, 999)), !1 !== F.minDate && (b = Y.strToDate(F.minDate), b = new Date(b.getFullYear(), b.getMonth(), b.getDate())); y < Y.currentTime.countDaysInMonth() || p.getDay() !== F.dayOfWeekStart || Y.currentTime.getMonth() === p.getMonth();) k = [], y += 1, s = p.getDay(), d = p.getDate(), u = p.getFullYear(), l = p.getMonth(), f = Y.getWeekOfYear(p), h = "", k.push("xdsoft_date"), c = F.beforeShowDay && e.isFunction(F.beforeShowDay.call) ? F.beforeShowDay.call(H, p) : null, F.allowDateRe && "[object RegExp]" === Object.prototype.toString.call(F.allowDateRe) ? F.allowDateRe.test(n.formatDate(p, F.formatDate)) || k.push("xdsoft_disabled") : F.allowDates && F.allowDates.length > 0 ? -1 === F.allowDates.indexOf(n.formatDate(p, F.formatDate)) && k.push("xdsoft_disabled") : !1 !== v && p > v || !1 !== b && b > p || c && !1 === c[0] ? k.push("xdsoft_disabled") : -1 !== F.disabledDates.indexOf(n.formatDate(p, F.formatDate)) ? k.push("xdsoft_disabled") : -1 !== F.disabledWeekDays.indexOf(s) ? k.push("xdsoft_disabled") : a.is("[readonly]") && k.push("xdsoft_disabled"), c && "" !== c[1] && k.push(c[1]), Y.currentTime.getMonth() !== l && k.push("xdsoft_other_month"), (F.defaultSelect || H.data("changed")) && n.formatDate(Y.currentTime, F.formatDate) === n.formatDate(p, F.formatDate) && k.push("xdsoft_current"), n.formatDate(D, F.formatDate) === n.formatDate(p, F.formatDate) && k.push("xdsoft_today"), (0 === p.getDay() || 6 === p.getDay() || -1 !== F.weekends.indexOf(n.formatDate(p, F.formatDate))) && k.push("xdsoft_weekend"), void 0 !== F.highlightedDates[n.formatDate(p, F.formatDate)] && (i = F.highlightedDates[n.formatDate(p, F.formatDate)], k.push(void 0 === i.style ? "xdsoft_highlighted_default" : i.style), h = void 0 === i.desc ? "" : i.desc), F.beforeShowDay && e.isFunction(F.beforeShowDay) && k.push(F.beforeShowDay(p)), x && (g += "<tr>", x = !1, F.weeks && (g += "<th>" + f + "</th>")), g += '<td data-date="' + d + '" data-month="' + l + '" data-year="' + u + '" class="xdsoft_date xdsoft_day_of_week' + p.getDay() + " " + k.join(" ") + '" title="' + h + '"><div>' + d + "</div></td>", p.getDay() === F.dayOfWeekStartPrev && (g += "</tr>", x = !0), p.setDate(d + 1);
                    if (g += "</tbody></table>", N.html(g), I.find(".xdsoft_label span").eq(0).text(F.i18n[r].months[Y.currentTime.getMonth()]), I.find(".xdsoft_label span").eq(1).text(Y.currentTime.getFullYear()), T = "", "", l = "", m = function(t, r) {
                            var o, i, s = Y.now(),
                                d = F.allowTimes && e.isArray(F.allowTimes) && F.allowTimes.length;
                            s.setHours(t), t = parseInt(s.getHours(), 10), s.setMinutes(r), r = parseInt(s.getMinutes(), 10), (o = new Date(Y.currentTime)).setHours(t), o.setMinutes(r), k = [], !1 !== F.minDateTime && F.minDateTime > o || !1 !== F.maxTime && Y.strtotime(F.maxTime).getTime() < s.getTime() || !1 !== F.minTime && Y.strtotime(F.minTime).getTime() > s.getTime() ? k.push("xdsoft_disabled") : !1 !== F.minDateTime && F.minDateTime > o || !1 !== F.disabledMinTime && s.getTime() > Y.strtotime(F.disabledMinTime).getTime() && !1 !== F.disabledMaxTime && s.getTime() < Y.strtotime(F.disabledMaxTime).getTime() ? k.push("xdsoft_disabled") : a.is("[readonly]") && k.push("xdsoft_disabled"), (i = new Date(Y.currentTime)).setHours(parseInt(Y.currentTime.getHours(), 10)), d || i.setMinutes(Math[F.roundTime](Y.currentTime.getMinutes() / F.step) * F.step), (F.initTime || F.defaultSelect || H.data("changed")) && i.getHours() === parseInt(t, 10) && (!d && F.step > 59 || i.getMinutes() === parseInt(r, 10)) && (F.defaultSelect || H.data("changed") ? k.push("xdsoft_current") : F.initTime && k.push("xdsoft_init_time")), parseInt(D.getHours(), 10) === parseInt(t, 10) && parseInt(D.getMinutes(), 10) === parseInt(r, 10) && k.push("xdsoft_today"), T += '<div class="xdsoft_time ' + k.join(" ") + '" data-hour="' + t + '" data-minute="' + r + '">' + n.formatDate(s, F.formatTime) + "</div>"
                        }, F.allowTimes && e.isArray(F.allowTimes) && F.allowTimes.length)
                        for (y = 0; y < F.allowTimes.length; y += 1) m(Y.strtotime(F.allowTimes[y]).getHours(), l = Y.strtotime(F.allowTimes[y]).getMinutes());
                    else
                        for (y = 0, t = 0; y < (F.hours12 ? 12 : 24); y += 1)
                            for (t = 0; 60 > t; t += F.step) m((10 > y ? "0" : "") + y, l = (10 > t ? "0" : "") + t);
                    for (R.html(T), o = "", y = 0, y = parseInt(F.yearStart, 10) + F.yearOffset; y <= parseInt(F.yearEnd, 10) + F.yearOffset; y += 1) o += '<div class="xdsoft_option ' + (Y.currentTime.getFullYear() === y ? "xdsoft_current" : "") + '" data-value="' + y + '">' + y + "</div>";
                    for (G.children().eq(0).html(o), y = parseInt(F.monthStart, 10), o = ""; y <= parseInt(F.monthEnd, 10); y += 1) o += '<div class="xdsoft_option ' + (Y.currentTime.getMonth() === y ? "xdsoft_current" : "") + '" data-value="' + y + '">' + F.i18n[r].months[y] + "</div>";
                    V.children().eq(0).html(o), e(H).trigger("generate.xdsoft")
                }, 10), t.stopPropagation()
            }).on("afterOpen.xdsoft", function() {
                var e, t, a, n;
                F.timepicker && (R.find(".xdsoft_current").length ? e = ".xdsoft_current" : R.find(".xdsoft_init_time").length && (e = ".xdsoft_init_time"), e ? (t = E[0].clientHeight, a = R[0].offsetHeight, (n = R.find(e).index() * F.timeHeightInTimePicker + 1) > a - t && (n = a - t), E.trigger("scroll_element.xdsoft_scroller", [parseInt(n, 10) / (a - t)])) : E.trigger("scroll_element.xdsoft_scroller", [0]))
            }), u = 0, N.on("touchend click.xdsoft", "td", function(t) {
                t.stopPropagation(), u += 1;
                var n = e(this),
                    r = Y.currentTime;
                return null == r && (Y.currentTime = Y.now(), r = Y.currentTime), !n.hasClass("xdsoft_disabled") && (r.setDate(1), r.setFullYear(n.data("year")), r.setMonth(n.data("month")), r.setDate(n.data("date")), H.trigger("select.xdsoft", [r]), a.val(Y.str()), F.onSelectDate && e.isFunction(F.onSelectDate) && F.onSelectDate.call(H, Y.currentTime, H.data("input"), t), H.data("changed", !0), H.trigger("xchange.xdsoft"), H.trigger("changedatetime.xdsoft"), (u > 1 || !0 === F.closeOnDateSelect || !1 === F.closeOnDateSelect && !F.timepicker) && !F.inline && H.trigger("close.xdsoft"), void setTimeout(function() {
                    u = 0
                }, 200))
            }), R.on("touchend click.xdsoft", "div", function(t) {
                t.stopPropagation();
                var a = e(this),
                    n = Y.currentTime;
                return null == n && (Y.currentTime = Y.now(), n = Y.currentTime), !a.hasClass("xdsoft_disabled") && (n.setHours(a.data("hour")), n.setMinutes(a.data("minute")), H.trigger("select.xdsoft", [n]), H.data("input").val(Y.str()), F.onSelectTime && e.isFunction(F.onSelectTime) && F.onSelectTime.call(H, Y.currentTime, H.data("input"), t), H.data("changed", !0), H.trigger("xchange.xdsoft"), H.trigger("changedatetime.xdsoft"), void(!0 !== F.inline && !0 === F.closeOnTimeSelect && H.trigger("close.xdsoft")))
            }), z.on("mousewheel.xdsoft", function(e) {
                return !F.scrollMonth || (e.deltaY < 0 ? Y.nextMonth() : Y.prevMonth(), !1)
            }), a.on("mousewheel.xdsoft", function(e) {
                return !F.scrollInput || (!F.datepicker && F.timepicker ? ((P = R.find(".xdsoft_current").length ? R.find(".xdsoft_current").eq(0).index() : 0) + e.deltaY >= 0 && P + e.deltaY < R.children().length && (P += e.deltaY), R.children().eq(P).length && R.children().eq(P).trigger("mousedown"), !1) : F.datepicker && !F.timepicker ? (z.trigger(e, [e.deltaY, e.deltaX, e.deltaY]), a.val && a.val(Y.str()), H.trigger("changedatetime.xdsoft"), !1) : void 0)
            }), H.on("changedatetime.xdsoft", function(t) {
                if (F.onChangeDateTime && e.isFunction(F.onChangeDateTime)) {
                    var a = H.data("input");
                    F.onChangeDateTime.call(H, Y.currentTime, a, t), delete F.value, a.trigger("change")
                }
            }).on("generate.xdsoft", function() {
                F.onGenerate && e.isFunction(F.onGenerate) && F.onGenerate.call(H, Y.currentTime, H.data("input")), U && (H.trigger("afterOpen.xdsoft"), U = !1)
            }).on("click.xdsoft", function(e) {
                e.stopPropagation()
            }), P = 0, j = function(e, t) {
                do {
                    if (!1 === t(e = e.parentNode)) break
                } while ("HTML" !== e.nodeName)
            }, A = function() {
                var t, a, n, r, o, i, s, d, u, l, f, c, m;
                if (t = (d = H.data("input")).offset(), a = d[0], l = "top", n = t.top + a.offsetHeight - 1, r = t.left, o = "absolute", u = e(F.contentWindow).width(), c = e(F.contentWindow).height(), m = e(F.contentWindow).scrollTop(), F.ownerDocument.documentElement.clientWidth - t.left < z.parent().outerWidth(!0)) {
                    var h = z.parent().outerWidth(!0) - a.offsetWidth;
                    r -= h
                }
                "rtl" === d.parent().css("direction") && (r -= H.outerWidth() - d.outerWidth()), F.fixed ? (n -= m, r -= e(F.contentWindow).scrollLeft(), o = "fixed") : (s = !1, j(a, function(e) {
                    return "fixed" === F.contentWindow.getComputedStyle(e).getPropertyValue("position") ? (s = !0, !1) : void 0
                }), s ? (o = "fixed", n + H.outerHeight() > c + m ? (l = "bottom", n = c + m - t.top) : n -= m) : n + a.offsetHeight > c + m && (n = t.top - a.offsetHeight + 1), 0 > n && (n = 0), r + a.offsetWidth > u && (r = u - a.offsetWidth)), i = H[0], j(i, function(e) {
                    return "relative" === F.contentWindow.getComputedStyle(e).getPropertyValue("position") && u >= e.offsetWidth ? (r -= (u - e.offsetWidth) / 2, !1) : void 0
                }), (f = {
                    position: o,
                    left: r,
                    top: "",
                    bottom: ""
                })[l] = n, H.css(f)
            }, H.on("open.xdsoft", function(t) {
                var a = !0;
                F.onShow && e.isFunction(F.onShow) && (a = F.onShow.call(H, Y.currentTime, H.data("input"), t)), !1 !== a && (H.show(), A(), e(F.contentWindow).off("resize.xdsoft", A).on("resize.xdsoft", A), F.closeOnWithoutClick && e([F.ownerDocument.body, F.contentWindow]).on("touchstart mousedown.xdsoft", function t() {
                    H.trigger("close.xdsoft"), e([F.ownerDocument.body, F.contentWindow]).off("touchstart mousedown.xdsoft", t)
                }))
            }).on("close.xdsoft", function(t) {
                var a = !0;
                I.find(".xdsoft_month,.xdsoft_year").find(".xdsoft_select").hide(), F.onClose && e.isFunction(F.onClose) && (a = F.onClose.call(H, Y.currentTime, H.data("input"), t)), !1 === a || F.opened || F.inline || H.hide(), t.stopPropagation()
            }).on("toggle.xdsoft", function() {
                H.is(":visible") ? H.trigger("close.xdsoft") : H.trigger("open.xdsoft")
            }).data("input", a), q = 0, H.data("xdsoft_datetime", Y), H.setOptions(F), Y.setCurrentTime(i()), a.data("xdsoft_datetimepicker", H).on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function() {
                a.is(":disabled") || a.data("xdsoft_datetimepicker").is(":visible") && F.closeOnInputClick || (clearTimeout(q), q = setTimeout(function() {
                    a.is(":disabled") || (U = !0, Y.setCurrentTime(i(), !0), F.mask && s(F), H.trigger("open.xdsoft"))
                }, 100))
            }).on("keydown.xdsoft", function(t) {
                var a, n = t.which;
                return -1 !== [p].indexOf(n) && F.enterLikeTab ? (a = e("input:visible,textarea:visible,button:visible,a:visible"), H.trigger("close.xdsoft"), a.eq(a.index(this) + 1).focus(), !1) : -1 !== [T].indexOf(n) ? (H.trigger("close.xdsoft"), !0) : void 0
            }).on("blur.xdsoft", function() {
                H.trigger("close.xdsoft")
            })
        }, d = function(t) {
            var a = t.data("xdsoft_datetimepicker");
            a && (a.data("xdsoft_datetime", null), a.remove(), t.data("xdsoft_datetimepicker", null).off(".xdsoft"), e(F.contentWindow).off("resize.xdsoft"), e([F.contentWindow, F.ownerDocument.body]).off("mousedown.xdsoft touchstart"), t.unmousewheel && t.unmousewheel())
        }, e(F.ownerDocument).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl", function(e) {
            e.keyCode === h && (C = !0)
        }).on("keyup.xdsoftctrl", function(e) {
            e.keyCode === h && (C = !1)
        }), this.each(function() {
            var t = e(this).data("xdsoft_datetimepicker");
            if (t) {
                if ("string" === e.type(o)) switch (o) {
                    case "show":
                        e(this).select().focus(), t.trigger("open.xdsoft");
                        break;
                    case "hide":
                        t.trigger("close.xdsoft");
                        break;
                    case "toggle":
                        t.trigger("toggle.xdsoft");
                        break;
                    case "destroy":
                        d(e(this));
                        break;
                    case "reset":
                        this.value = this.defaultValue, this.value && t.data("xdsoft_datetime").isValidDate(n.parseDate(this.value, F.format)) || t.data("changed", !1), t.data("xdsoft_datetime").setCurrentTime(this.value);
                        break;
                    case "validate":
                        t.data("input").trigger("blur.xdsoft");
                        break;
                    default:
                        t[o] && e.isFunction(t[o]) && (u = t[o](i))
                } else t.setOptions(o);
                return 0
            }
            "string" !== e.type(o) && (!F.lazyInit || F.open || F.inline ? s(e(this)) : function(e) {
                e.on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function t() {
                    e.is(":disabled") || e.data("xdsoft_datetimepicker") || (clearTimeout(P), P = setTimeout(function() {
                        e.data("xdsoft_datetimepicker") || s(e), e.off("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", t).trigger("open.xdsoft")
                    }, 100))
                })
            }(e(this)))
        }), u
    }, e.fn.datetimepicker.defaults = a
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(e) {
    function t(t) {
        var i = t || window.event,
            s = d.call(arguments, 1),
            u = 0,
            f = 0,
            c = 0,
            m = 0,
            h = 0,
            g = 0;
        if ((t = e.event.fix(i)).type = "mousewheel", "detail" in i && (c = -1 * i.detail), "wheelDelta" in i && (c = i.wheelDelta), "wheelDeltaY" in i && (c = i.wheelDeltaY), "wheelDeltaX" in i && (f = -1 * i.wheelDeltaX), "axis" in i && i.axis === i.HORIZONTAL_AXIS && (f = -1 * c, c = 0), u = 0 === c ? f : c, "deltaY" in i && (u = c = -1 * i.deltaY), "deltaX" in i && (f = i.deltaX, 0 === c && (u = -1 * f)), 0 !== c || 0 !== f) {
            if (1 === i.deltaMode) {
                var p = e.data(this, "mousewheel-line-height");
                u *= p, c *= p, f *= p
            } else if (2 === i.deltaMode) {
                var y = e.data(this, "mousewheel-page-height");
                u *= y, c *= y, f *= y
            }
            if (m = Math.max(Math.abs(c), Math.abs(f)), (!o || o > m) && (o = m, n(i, m) && (o /= 40)), n(i, m) && (u /= 40, f /= 40, c /= 40), u = Math[u >= 1 ? "floor" : "ceil"](u / o), f = Math[f >= 1 ? "floor" : "ceil"](f / o), c = Math[c >= 1 ? "floor" : "ceil"](c / o), l.settings.normalizeOffset && this.getBoundingClientRect) {
                var D = this.getBoundingClientRect();
                h = t.clientX - D.left, g = t.clientY - D.top
            }
            return t.deltaX = f, t.deltaY = c, t.deltaFactor = o, t.offsetX = h, t.offsetY = g, t.deltaMode = 0, s.unshift(t, u, f, c), r && clearTimeout(r), r = setTimeout(a, 200), (e.event.dispatch || e.event.handle).apply(this, s)
        }
    }

    function a() {
        o = null
    }

    function n(e, t) {
        return l.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
    }
    var r, o, i = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        d = Array.prototype.slice;
    if (e.event.fixHooks)
        for (var u = i.length; u;) e.event.fixHooks[i[--u]] = e.event.mouseHooks;
    var l = e.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var a = s.length; a;) this.addEventListener(s[--a], t, !1);
            else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", l.getLineHeight(this)), e.data(this, "mousewheel-page-height", l.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var a = s.length; a;) this.removeEventListener(s[--a], t, !1);
            else this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(t) {
            var a = e(t),
                n = a["offsetParent" in e.fn ? "offsetParent" : "parent"]();
            return n.length || (n = e("body")), parseInt(n.css("fontSize"), 10) || parseInt(a.css("fontSize"), 10) || 16
        },
        getPageHeight: function(t) {
            return e(t).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
});