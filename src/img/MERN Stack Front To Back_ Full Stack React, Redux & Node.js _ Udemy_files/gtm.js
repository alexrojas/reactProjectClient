
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"289",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\"body\").attr(\"data-clp-course-id\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.amount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",1],8,16],";return parseFloat(a\/100).toFixed(2)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.amount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],";return a\/100})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery('div[data-purpose\\x3d\"introduction-video\"]').length)return jQuery('a[data-purpose\\x3d\"take-this-course-button\"').attr(\"data-signuppopupidentifier\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery(\"div.hidden-course-bar.slideDown\").length)return\"scrolled\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery('div[data-purpose\\x3d\"introduction-video\"]').length)return jQuery(\".current-price\").length})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery('div[data-purpose\\x3d\"introduction-video\"]').length)return jQuery(\".current-price\").text().replace(\"$\",\"\").trim()})();"]
    },{
      "function":"__j",
      "vtp_name":"UD.request.locale"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"ja_JP\"==",["escape",["macro",9],8,16],"||\"ja-JP\"==",["escape",["macro",9],8,16],"||\"jp-JP\"==",["escape",["macro",9],8,16],"||\"jp_JP\"==",["escape",["macro",9],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"en_US\"==",["escape",["macro",9],8,16],"||\"en-US\"==",["escape",["macro",9],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\"body\").attr(\"data-course-labels-experiment-hotjar\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\"body\").attr(\"data-hotjar-channel-type\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){channelType=jQuery(\"body\").attr(\"data-hotjar-channel-type\");hotjarPage=jQuery(\"body\").attr(\"data-hotjar-page\");return\"featured\"===channelType||\"logged-in-homepage\"===hotjarPage})();"]
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__j",
      "vtp_name":"UD.me.id"
    },{
      "function":"__e"
    },{
      "function":"__u"
    },{
      "function":"__r"
    },{
      "function":"__c",
      "vtp_value":"UA-12366301-1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"analyticsAccount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adwordsAccount.appId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adwordsAccount.successLabel"
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"video-player-no-purpose",
      "vtp_name":"gtm.element.dataset.purpose"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__j",
      "vtp_name":"UD.visiting.visitor.id"
    },{
      "function":"__v",
      "vtp_name":"isMember",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.buyableId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.id"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.isMarketingBoostAgreed"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.affiliateType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseId"
    },{
      "function":"__j",
      "vtp_name":"UD.me.impact_radius_id"
    },{
      "function":"__j",
      "vtp_name":"UD.me.impact_radius_email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.code"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseAmount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseSku"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-purpose"
    },{
      "function":"__f"
    },{
      "function":"__r"
    },{
      "function":"__d",
      "vtp_selectorType":"ID",
      "vtp_elementId":"tag-manager-courseId"
    },{
      "function":"__c",
      "vtp_value":"Course"
    },{
      "function":"__c",
      "vtp_value":"Topic"
    },{
      "function":"__v",
      "vtp_name":"eventCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"nonInteraction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"eventLabel",
      "vtp_defaultValue":"undefined",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventValue",
      "vtp_defaultValue":"undefined",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventNoninteraction",
      "vtp_defaultValue":"False",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"isMember",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"experiment",
      "vtp_dataLayerVersion":2
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",17],
      "vtp_defaultValue":"Included",
      "vtp_map":["list",["map","key","12392710","value","1"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"env"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.buyableTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.currency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.isLinkshare"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adwordsAccount"
    },{
      "function":"__c",
      "vtp_value":"aw"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"name"
    },{
      "function":"__j",
      "vtp_name":"window.scrollY"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.start"
    },{
      "function":"__c",
      "vtp_value":"UA-12366301-47"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.affiliateType"
    }],
  "tags":[{
      "function":"__html",
      "priority":2,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"mark\",type:\"Retargeting\"});\u003C\/script\u003E\n\n\u003Cscript src=\"\/\/cdn.taboola.com\/libtrc\/udemy\/tfa.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":125
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1457291081167286\");fbq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":13
    },{
      "function":"__cl",
      "tag_id":28
    },{
      "function":"__lcl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "tag_id":29
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":33
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":34
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":"1",
      "vtp_conversionId":"973941651",
      "vtp_conversionLabel":"PKv-COL4z1wQk9e00AM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":38
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":46
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":49
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"951369813",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",19],
      "tag_id":62
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"966888136",
      "vtp_conversionLabel":"TQxQCNq4hV0QyJWGzQM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":65
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"951369813",
      "vtp_conversionLabel":"5dghCNW2hV0Q1YDTxQM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":66
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/5079.xg4ken.com\/media\/redir.php?track=1\u0026token=a1ed898d-f7f9-4815-ba08-19fe053ee591\u0026type=conv\u0026val=0.0\u0026orderId=\u0026promoCode=\u0026valueCurrency=USD\u0026GCID=\u0026kw=\u0026product=",
      "tag_id":78
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_url":"https:\/\/5079.xg4ken.com\/media\/redir.php?track=1\u0026token=6af875c0-59a1-49cd-9618-5df0d111948d\u0026type=conv\u0026val=0.0\u0026orderId=\u0026promoCode=\u0026valueCurrency=USD\u0026GCID=\u0026kw=\u0026product=",
      "vtp_randomNumber":["macro",20],
      "tag_id":79
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"userID",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"excluded",
      "vtp_dimension":["list",["map","index","16","dimension",["macro",17]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":80
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/ct.pinterest.com\/?tid=fGjngNzQ7mk",
      "tag_id":82
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-29",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":86
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":88
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":"1",
      "vtp_conversionId":["macro",23],
      "vtp_conversionLabel":["macro",24],
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":90
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value","\/join\/login-popup\/"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":94
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value","\/payment\/checkout\/"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-46",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":95
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"seotest",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"seotest",
      "vtp_dimension":["list",["map","index","19","dimension","show price"]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":121
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"courseview",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",0],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",0]],["map","index","6","dimension","offerdetail"],["map","index","8","dimension",["macro",8]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":122
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"send",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"15_seconds",
      "vtp_eventLabel":"read",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":123
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"signup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":132
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventValue":["macro",2],
      "vtp_eventCategory":"purchase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"course",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":133
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"880479204",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",19],
      "tag_id":134
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":"1",
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"9fRMCPq2oWcQ5JfsowM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":136
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":141
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":142
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"877552150",
      "vtp_conversionLabel":"80LmCOWbwGgQlsS5ogM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":143
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/www.quora.com\/_\/ad\/f3d99eb602d5430b8ecc99610afe3ded\/pixel",
      "tag_id":145
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","True"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackerName":"ufbonly",
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"business.udemy.com",
      "vtp_decorateFormsAutoLink":true,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-47",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":146
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"test video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"submission",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":154
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"createcourse",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":155
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":158
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":159
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"9fRMCPq2oWcQ5JfsowM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":160
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"880479204",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",19],
      "tag_id":161
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"linkshare",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"signup",
      "vtp_eventLabel":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":163
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"852928941",
      "vtp_conversionLabel":"CzYTCLjiy3MQrdPalgM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":173
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":178
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":179
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",2],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"877556973",
      "vtp_conversionLabel":"j88uCJmGiXkQ7em5ogM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":181
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":186
    },{
      "function":"__cl",
      "tag_id":203
    },{
      "function":"__cl",
      "tag_id":204
    },{
      "function":"__cl",
      "tag_id":205
    },{
      "function":"__cl",
      "tag_id":206
    },{
      "function":"__cl",
      "tag_id":207
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"10000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_107",
      "tag_id":208
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"10000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_108",
      "tag_id":209
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"20000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_109",
      "tag_id":210
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"20000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_110",
      "tag_id":211
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_111",
      "tag_id":212
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_112",
      "tag_id":213
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"40000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_113",
      "tag_id":214
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"40000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_114",
      "tag_id":215
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"50000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_115",
      "tag_id":216
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"50000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_116",
      "tag_id":217
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"60000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_117",
      "tag_id":218
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"60000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_118",
      "tag_id":219
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"70000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_119",
      "tag_id":220
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"80000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_120",
      "tag_id":221
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"80000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_121",
      "tag_id":222
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"90000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_122",
      "tag_id":223
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"90000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_123",
      "tag_id":224
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"110000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_124",
      "tag_id":225
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"100000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_125",
      "tag_id":226
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"110000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_126",
      "tag_id":227
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"120000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_127",
      "tag_id":228
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"120000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_128",
      "tag_id":229
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"70000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_129",
      "tag_id":230
    },{
      "function":"__cl",
      "tag_id":231
    },{
      "function":"__cl",
      "tag_id":232
    },{
      "function":"__cl",
      "tag_id":233
    },{
      "function":"__cl",
      "tag_id":234
    },{
      "function":"__cl",
      "tag_id":235
    },{
      "function":"__cl",
      "tag_id":236
    },{
      "function":"__cl",
      "tag_id":237
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"15000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_139",
      "tag_id":238
    },{
      "function":"__cl",
      "tag_id":239
    },{
      "function":"__cl",
      "tag_id":240
    },{
      "function":"__cl",
      "tag_id":241
    },{
      "function":"__cl",
      "tag_id":242
    },{
      "function":"__cl",
      "tag_id":243
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar fb_param={pixel_id:\"6009170267856\",value:\"0.00\",currency:\"USD\"};(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fp.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/offsite_event.php?id=6009170267856\u0026amp;value=0\u0026amp;currency=USD\"\u003E\u003C\/noscript\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b=window._fbq||(window._fbq=[]);if(!b.loaded){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c);b.loaded=!0}})();window._fbq=window._fbq||[];_fbq.push([\"track\",\"6009170268656\",{value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);_fbq.push([\"track\",\"6016501834270\",{value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?ev=6009170268656\u0026amp;cd[value]=0.00\u0026amp;cd[currency]=USD\u0026amp;noscript=1\"\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?ev=6016501834270\u0026amp;cd[value]=0.00\u0026amp;cd[currency]=USD\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":4
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _kiq=_kiq||[];(function(){setTimeout(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/s3.amazonaws.com\/ki.js\/34436\/6GL.js\";b.parentNode.insertBefore(a,b)},1)})();(function(){_kiq.push([\"identify\",",["escape",["macro",17],8,16],"||\"\"]);_kiq.push([\"set\",{user_id:",["escape",["macro",17],8,16],"||\"\",visitor_id:",["escape",["macro",31],8,16],"||\"\"}])})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=989116586,google_conversion_language=\"en\",google_conversion_format=\"2\",google_conversion_color=\"ffffff\",google_conversion_label=\"Ah9qCJbXgAgQqvHS1wM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/989116586\/?label=Ah9qCJbXgAgQqvHS1wM\u0026amp;guid=ON\u0026amp;script=0\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar fb_param={pixel_id:\"6016391666497\",value:\"0.00\",currency:\"USD\"};(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fp.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/offsite_event.php?id=6016391666497\u0026amp;value=0\u0026amp;currency=USD\"\u003E\u003C\/noscript\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar google_conversion_id=966888136,google_conversion_language=\"en\",google_conversion_format=\"3\",google_conversion_color=\"ffffff\",google_conversion_label=\"SgynCKCv_VoQyJWGzQM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":35
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar google_conversion_id=951369813,google_conversion_language=\"en\",google_conversion_format=\"3\",google_conversion_color=\"ffffff\",google_conversion_label=\"kUq1CNrK-1oQ1YDTxQM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":36
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E(function(){var b=window._fbq||(window._fbq=[]);if(!b.loaded){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c);b.loaded=!0}})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"6034528106080\",{value:\"0.00\",currency:\"JPY\"}]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":37
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar $course_id=jQuery(\"body\").attr(\"data-clp-course-id\");if(void 0!==$course_id\u0026\u00260\u003C$course_id.length){var clp_course_id=jQuery(\"body\").attr(\"data-clp-course-id\");window._fbq=window._fbq||[];_fbq.push([\"track\",\"ViewContent\",{content_ids:clp_course_id,content_type:\"product\"}])};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":40
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003EUD.GoogleAnalytics.setValue(\"dimension7\",\"true\");UD.GoogleAnalytics.trackEvent(\"ismember\",\"ismember\",\"ismember\",void 0,void 0,{nonInteraction:1});window._fbq=window._fbq||[];_fbq.push([\"track\",\"isMember\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":42
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"101425363524479\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=951369813,google_custom_params=window.google_tag_params,google_remarketing_only=!0;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"101425363524479\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar google_conversion_id=951369813,google_custom_params=window.google_tag_params,google_remarketing_only=!0;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":48
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E0\u003C$(\".signup-link\").length\u0026\u0026$(\".signup-link\").trigger(\"click\");\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"101425363524479\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=101425363524479\u0026amp;ev=PixelInitialized\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/javascript\" language=\"javascript\"\u003Evar yahoo_retargeting_id=\"BKO82CLEGF\",yahoo_retargeting_label=\"\";\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" language=\"javascript\" src=\"\/\/b92.yahoo.co.jp\/js\/s_retargeting.js\"\u003E\u003C\/script\u003E\n\n\u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/aax-fe.amazon-adsystem.com\/s\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D97c97873-b320-2f7a-9117-f3d5aa752a9e%26type%3Dnull%26m%3D6\u0026amp;ex-fch=416613\u0026amp;ex-src=udemy.com\u0026amp;ex-hargs=v%3D1.0%3Bc%3D7690357268661%3Bp%3D97C97873-B320-2F7A-9117-F3D5AA752A9E\"\u003E　",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar $course_id=jQuery(\"body\").attr(\"data-clp-course-id\");\nif(void 0!==$course_id\u0026\u00260\u003C$course_id.length){$course_id=jQuery(\"body\").attr(\"data-clp-course-id\");var price=jQuery(\".price-text__current\").text().replace(\"$\",\"\").trim().match(\/\\d+\/);void 0!==UD.GoogleAnalytics\u0026\u0026(UD.GoogleAnalytics.setValue(\"dimension5\",$course_id),UD.GoogleAnalytics.setValue(\"dimension6\",\"conversionintent\"),UD.GoogleAnalytics.setValue(\"dimension8\",price),UD.GoogleAnalytics.trackEvent(\"addtocartclick\",$course_id,price,{nonInteraction:1}));window._fbq=window._fbq||[];_fbq.push([\"track\",\n\"AddToCart\",{content_name:\"Shopping Cart\",content_ids:$course_id,content_type:\"product\"}])};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"Purchase\",{content_ids:",["escape",["macro",33],8,16],",content_type:\"product\",order_id:",["escape",["macro",34],8,16],",value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/6554.js\" type=\"text\/gtmscript\" defer\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript language=\"JavaScript\"\u003Evar OB_ADV_ID=26518,str='\\x3cscript src\\x3d\"\/\/widgets.outbrain.com\/obtp.js\" type\\x3d\"text\/javascript\"\\x3e\\x3c\/script\\x3e';document.write(str);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":83
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar _pop=_pop||[];_pop.push([\"_set_conversion_id\",\"benesse_cci\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"api.popin.cc\/conversion.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":84
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.charset=\"utf-8\";a.async=!0;a.src=window.location.protocol+\"\/\/api.popin.cc\/ads\/benesse_cci.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":85
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"action\",name:\"Conversion\",revenue:",["escape",["macro",2],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":124
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"SignupSuccess\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":128
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"SignupClick\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003E(function(){var a=window.MTBADVS=window.MTBADVS||{};a.ConvContext=a.ConvContext||{};a.ConvContext.queue=a.ConvContext.queue||[];a.ConvContext.queue.push({advertiser_id:1808,price:0,convtype:0,dat:\"\"});a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.mtburn.com\/advs-conversion.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n        ",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":139
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _fout_queue=_fout_queue||{};void 0===_fout_queue.segment\u0026\u0026(_fout_queue.segment={});void 0===_fout_queue.segment.queue\u0026\u0026(_fout_queue.segment.queue=[]);_fout_queue.segment.queue.push({user_id:10595,advertiser_id:1808,contractor_id:5});(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.fout.jp\/segmentation.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n    ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,d,b,f,e){a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:298206,hjsv:5};f=c.getElementsByTagName(\"head\")[0];e=c.createElement(\"script\");e.async=1;e.src=d+a._hjSettings.hjid+b+a._hjSettings.hjsv;f.appendChild(e)})(window,document,\"\/\/static.hotjar.com\/c\/hotjar-\",\".js?sv\\x3d\");\n(function(){var a=jQuery(\"body\"),c=a.attr(\"data-hotjar-page\"),d=a.attr(\"data-hotjar-device\");a=a.attr(\"data-hotjar-bw\");var b=[];c\u0026\u0026(b.push(c),d\u0026\u0026a\u0026\u0026b.push(d,a),b.push(void 0===UD.me.id?\"visitor\":\"user\"),hj(\"trigger\",b.join(\"-\")))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":149
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"NewUserPurchase\",{value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":156
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"273-CKQ-053\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":157
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Eadroll_adv_id=\"554CPNW4XBAX5EYKBL4HVU\";adroll_pix_id=\"OKLCQMMNANCRNGGEOKKR5M\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":162
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"LinkshareSignupClick\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":164
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{__adroll.record_user({adroll_segments:\"a9df566e\"})}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":165
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg src=\"https:\/\/secure.adnxs.com\/px?id=849711\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":167
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){try{var b={id:\"6oe2u\",event:\"\"},a=document.createElement(\"script\");a.src=\"\/\/api.smartnews-ads.com\/assets\/conv.js?\"+(new Date).getTime();a.type=\"text\/javascript\";a.id=\"_smartnews_ads_conversion_script_\"+b.id;a.setAttribute(\"data-smartnews-ads\",JSON.stringify(b));(document.body||document.head).appendChild(a)}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":168
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003E!function(){if(window.SmartnewsAds=window.SmartnewsAds||{},!window.SmartnewsAds.p){var a=window.SmartnewsAds.p=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)};window.SmartnewsAds._p||(window.SmartnewsAds._p=a);a.push=a;a.version=\"1.0.0\";a.queue=[];var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/cdn.smartnews-ads.com\/i\/pixel.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c)}}();SmartnewsAds.p(\"3743a3945eb6b3d209bbf3bc\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/i.smartnews-ads.com\/p?id=3743a3945eb6b3d209bbf3bc\u0026amp;e=PageView\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":169
    },{
      "function":"__html",
      "setup_tags":["list",["tag",123,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eire(\"trackConversion\",12148,{orderId:",["escape",["macro",38],8,16],",customerId:",["escape",["macro",39],8,16],",email:",["escape",["macro",40],8,16],",orderPromoCode:",["escape",["macro",41],8,16],",currencyCode:\"USD\",items:[{subTotal:",["escape",["macro",42],8,16],",category:",["escape",["macro",43],8,16],",sku:",["escape",["macro",44],8,16],",quantity:1}]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":170
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(g,e,a,f,b,c,d){b.ire_o=a;b[a]=b[a]||function(){(b[a].a=b[a].a||[]).push(arguments)};c=f.createElement(e);d=f.getElementsByTagName(e)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(\"\/\/d.impactradius-event.com\/A380319-1bcf-4b7b-9299-22e85825ceea1.js\",\"script\",\"ire\",document,window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "setup_tags":["list",["tag",123,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eire(\"identify\",{customerId:",["escape",["macro",39],8,16],",customerEmail:",["escape",["macro",40],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":172
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"455027734843984\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=455027734843984\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":174
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":175
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript src=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003Etwttr.conversion.trackPid(\"ny0dy\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":176
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":177
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"BecomeAnInstructor\"]);sendPageEvent(\"track\",\"teach_funnel\",{action:\"create-course\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":180
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar _fout_queue=_fout_queue||{};void 0===_fout_queue.segment\u0026\u0026(_fout_queue.segment={});void 0===_fout_queue.segment.queue\u0026\u0026(_fout_queue.segment.queue=[]);_fout_queue.segment.queue.push({user_id:23601,advertiser_id:8881,contractor_id:5});(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.fout.jp\/segmentation.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":182
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){var a=window.MTBADVS=window.MTBADVS||{};a.ConvContext=a.ConvContext||{};a.ConvContext.queue=a.ConvContext.queue||[];a.ConvContext.queue.push({advertiser_id:8881,price:0,convtype:1,dat:\"\"});a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.mtburn.com\/advs-conversion.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":183
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar request=new XMLHttpRequest;request.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);request.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");request.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");request.send(JSON.stringify({type:\"aff\"}));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar request=new XMLHttpRequest;request.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);request.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");request.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");request.send(JSON.stringify({type:\"paid_acq\"}));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){try{var b={id:\"88dg1\",event:\"\"},a=document.createElement(\"script\");a.src=\"\/\/api.smartnews-ads.com\/assets\/conv.js?\"+(new Date).getTime();a.type=\"text\/javascript\";a.id=\"_smartnews_ads_conversion_script_\"+b.id;a.setAttribute(\"data-smartnews-ads\",JSON.stringify(b));(document.body||document.head).appendChild(a)}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript src=\"https:\/\/bannerfarm.aolp.jp\/smartpxl\/89892\/smartpxl.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":190
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\"});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1147638\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/trc.taboola.com\/1147638\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"action\",name:\"conversion\"});\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"\/\/cdn.taboola.com\/libtrc\/3500045453-SC-prod\/tfa.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"\/\/trc.taboola.com\/3500045453-SC-prod\/log\/3\/action?name=conversion\u0026amp;item-url={encoded_page_url}\" width=\"0\" height=\"0\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":192
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"mark\",type:\"6317021retargeting\"});\u003C\/script\u003E\n\u003Cscript src=\"\/\/cdn.taboola.com\/libtrc\/3500045453-SC-prod\/tfa.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"\/\/trc.taboola.com\/3500045453-SC-prod\/log\/3\/mark?marking-type=6317021retargeting\u0026amp;item-url={encoded_page_url}\" width=\"0\" height=\"0\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":193
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"mark\",type:\"6314024retargeting\"});\u003C\/script\u003E\n\u003Cscript src=\"\/\/cdn.taboola.com\/libtrc\/3500045453-SC-prod\/tfa.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"\/\/trc.taboola.com\/3500045453-SC-prod\/log\/3\/mark?marking-type=6314024retargeting\u0026amp;item-url={encoded_page_url}\" width=\"0\" height=\"0\"\u003E\n\u003C\/noscript\u003E \n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":194
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E_linkedin_data_partner_id=\"371524\";\u003C\/script\u003E\u003Cscript type=\"text\/javascript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E \u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=371524\u0026amp;fmt=gif\"\u003E \u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":195
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\"});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1049902\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":196
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"add_to_cart\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=add_to_cart\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":197
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E_tfa.push({notify:\"event\",name:\"make_purchase\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=make_purchase\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":198
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E_tfa.push({notify:\"event\",name:\"BuyNow\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=BuyNow\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":199
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"Login\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=Login\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":200
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E_tfa.push({notify:\"event\",name:\"complete_registration\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=complete_registration\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":201
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d,g,e,a,f,b){c.ktag||(a=function(){a.sendEvent?a.sendEvent(arguments):a.ktq.push(arguments)},a.ktq=[],c.ktag=a,f=d.getElementsByTagName(e)[0],b=d.createElement(e),b.async=!0,b.src=g,f.parentNode.appendChild(b))}(window,document,\"\/\/resources.xg4ken.com\/js\/v2\/ktag.js?tid\\x3dKT-N3AE7-3EC\",\"script\");ktag(\"setup\",\"KT-N3AE7-3EC\",\"\\x3cUSER_ID\\x3e\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"https:\/\/events.xg4ken.com\/pixel\/v2?tid=KT-N3AE7-3EC\u0026amp;noscript=1\" width=\"1\" height=\"1\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":202
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/create-learning-portal\/"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/tapen\/"
    },{
      "function":"_ew",
      "arg0":["macro",15],
      "arg1":"signup_success=1"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"udemy\\.com\\\/cart\\\/success"
    },{
      "function":"_gt",
      "arg0":["macro",3],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"transaction_purchase"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/jp\/"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"full_transaction"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"instructor_analytics"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/payment\/checkout\/"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"button-enroll-b"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"take-this-course-button"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.click"
    },{
      "function":"_gt",
      "arg0":["macro",7],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"(^$|((^|,)164179_139($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"submit-id-submit"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"btn btn-primary btn btn-success"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"cart\/success"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?organization\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"https:\/\/www.udemy.com\/create-learning-portal\/"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"submit-id-submit"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"\\\/course\\\/([0-9]*)\\\/manage\\\/feedback\\\/test"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"middle create_course button"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"btn btn-primary btn-huge btn-shadowed btn-lg join-btn"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/affiliate\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?courses\/search\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/learn\/v4\/"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"category"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"subcategory"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/cart\/subscribe"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/cart\/success"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/mobile\/"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/cart\/"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"udemy.com"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?course\/subscribe\/.*$"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":".*\\.dev\\.udemy\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"2u.udemy.com|360E.udemy.com|abtasty.udemy.com|ABD.udemy.com|accesscapital.udemy.com|acemotor.udemy.com|adnatcongsco.udemy.com|adroll.udemy.com|akqa.udemy.com|akhbar.udemy.com|amaysim.udemy.com|Ampush.udemy.com|angelcitydata.udemy.com|anudip.udemy.com|apiheattransfer.udemy.com|aucklandcouncil.udemy.com|avascent.udemy.com|avg.udemy.com|iclas.udemy.com|azumo.udemy.com|bandwidth.udemy.com|bayt.udemy.com|beepi.udemy.com|bethyl.udemy.com|bulletproof.udemy.com|campusexplorer.udemy.com|caribbeanideas.udemy.com|carsguide.udemy.com|cchscarelink.udemy.com|cnu.udemy.com|ciazumano.udemy.com|cision.udemy.com|cloudreach.udemy.com|cacfp.udemy.com|collegespring.udemy.com|chs.udemy.com|continental.udemy.com|dcmservices.udemy.com|delivery.udemy.com|kyna.udemy.com|develappme.udemy.com|dichter-neira.udemy.com|duouniversity.udemy.com|teradyne-std-learning.udemy.com|eastwest.udemy.com|eastexcrude.udemy.com|echo3.udemy.com|edm.udemy.com|esa-ift.udemy.com|crunchyroll.udemy.com|ei.udemy.com|esa.udemy.com|examsoft.udemy.com|fleetmaticsacademy.udemy.com|http:\/\/fullscreen.udemy.com\/|fundamentallabor.udemy.com|fundingcircle.udemy.com|globalstrategies.udemy.com|cdp.udemy.com|glm.udemy.com|companybypeople.udemy.com|harbingergroup.udemy.com|hawaiisnacks.udemy.com|hbconstruction.udemy.com|hostpapa.udemy.com|huddle.udemy.com|ibm.udemy.com|geotecnologies.udemy.com|ignyte.udemy.com|imagineteam.udemy.com|inkblot.udemy.com|insite.udemy.com|instacart.udemy.com|jimenezconsulting.udemy.com|kimble-chase.udemy.com|kookmin.udemy.com|laneconstruct.udemy.com|lightsailenergy.udemy.com|lmuec.udemy.com|lpsoftware.udemy.com|lyft.udemy.com|cmsteam.udemy.com|mareku.udemy.com|MTC.udemy.com|mattex.udemy.com|mb3.udemy.com|melanoma.udemy.com|mmc.udemy.com|meridian.udemy.com|mixpanel.udemy.com|moboom.udemy.com|mre-consulting.udemy.com|michiganlottery.udemy.com|nike.udemy.com|nrtwebservices.udemy.com|ornl.udemy.com|ohiogt.udemy.com|on24.udemy.com|optimizely.udemy.com|optis.udemy.com|odc.udemy.com|oidtraining.udemy.com|pacificwoodtech.udemy.com|pagerduty.udemy.com|pwconsulting.udemy.com|pitneybowes.udemy.com|pjdick.udemy.com|platinum.udemy.com|powertech.udemy.com|powerteq.udemy.com|pretlist.udemy.com|proofpoint.udemy.com|prophet.udemy.com|quemetco.udemy.com|rslempdev.udemy.com|realnet.udemy.com|rottapharm.udemy.com|SLCC.udemy.com|thesentergroup.udemy.com|signaturehealthinc.udemy.com|step.udemy.com|stonehambank.udemy.com|cpfl.udemy.com|sweetwater.udemy.com|syndicatesales.udemy.com|tamkeentech.udemy.com|tegile.udemy.com|tamu.udemy.com|chernin.udemy.com|sideout.udemy.com|wistar.udemy.com|thoughtspot.udemy.com|toptal.udemy.com|tomo.udemy.com|tpipr.udemy.com|trginternational.udemy.com|tricerat.udemy.com|tpl.udemy.com|type1team.udemy.com|redal.udemy.com|unifiedtcg.udemy.com|Valin.udemy.com|viki.udemy.com|walmart.udemy.com|wanhaisg.udemy.com|webair.udemy.com|webanywhere.udemy.com|wedbush.udemy.com|egs.udemy.com|wipro.udemy.com|wolfram.udemy.com|worldpac.udemy.com|xoomworks.udemy.com|xtremeconsulting.udemy.com|yemeksepeti.udemy.com|zeeto.udemy.com|zensar.udemy.com|learning.udemy.com|paulatest.udemy.com"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"organization-manage"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"^(va2site|aws-dr|www).udemy.com.*$"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?payment\/^success"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"^(aws-dr|www).udemy.com.*$"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/apps\/admin"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"www.udemy.com\/course-manage\/edit-getting-started\/"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",32],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"https:\/\/www.udemy.com\/courses\/?pmtag=blog\u0026utm_source=blog\u0026utm_medium=udemyads\u0026utm_content=hellobar\u0026utm_campaign=content-marketing-blog\u0026source=blogpop\u0026utm_source=blog\u0026utm_medium=udemyads\u0026utm_content=post0\u0026utm_campaign=content-marketing-blog\u0026xref=blog"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"\\\/collection\\\/jp\\-"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"[0-9]+"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"True"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"add-to-cart"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/cart\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/courses\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/home\/my-courses\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/collection\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/home\/teaching\/topics\/"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/manage\/feedback\/test\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/home\/teaching\/insights\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/affiliate\/"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"\/.+\/learn\/v4\/.+\/reviews\/|\/home\/my-courses\/.+\/.+\/reviews\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/teaching\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/topic"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/gift\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/gift\/redeem\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/gift\/share\/"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"new_user_transaction_purchase"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"impact_radius"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"127.0.0.1"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":".*\\.devs\\.dev-ud\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"localhost"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/teach\/?$"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/home\/teaching\/onboarding\/"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"buy-this-course-button"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"login"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"signup"
    }],
  "rules":[
    [["if",0,3],["unless",1,2],["add",2,3,0,113,123,124,130]],
    [["if",3,5,6],["add",4,5,8,91,92,93,98,99]],
    [["if",3,7],["add",6,12,13,15,28,40,87,105,106,107,125]],
    [["if",8,9],["add",6,15,31,43,87,103,108,119,131,133,134,143]],
    [["if",3,10],["add",7,96,97]],
    [["if",0,3,6],["add",9,26,29,38,42,112,121,128,135,136,138,139]],
    [["if",6,11],["add",10,11]],
    [["if",3,4],["add",14],["block",2,3,9,16,23,26,29,38,42,88,1,104,0,112,116,118,121,123,124,128,130,141]],
    [["if",3],["add",14,16,36,104,116,141,147,45,46,47,48,49,73,74,75,76,77,78,79,81,82,83,84,85]],
    [["if",12],["add",17,18]],
    [["if",13,14,15,16],["add",19]],
    [["if",13,15,16],["unless",14],["add",20]],
    [["if",3,17],["add",21]],
    [["if",3],["unless",18],["add",22,44,113,50,53,54,57,59,61,64,66,68,69,70,72]],
    [["if",19,20],["add",23]],
    [["if",16,21,22],["add",24,110]],
    [["if",11],["add",25,30,35,37]],
    [["if",6,8,9],["add",27,41,111,120,126,127,137],["block",138,139]],
    [["if",3,23],["add",28]],
    [["if",3,25],["add",32,115]],
    [["if",16,26,27],["add",33]],
    [["if",16,28],["add",34]],
    [["if",16,29,30],["add",39,117]],
    [["if",3,31],["add",44,113]],
    [["if",3,32],["add",44]],
    [["if",3,33],["add",44,113],["block",123,124]],
    [["if",3,31,34],["add",44,113]],
    [["if",3,35],["add",44,113]],
    [["if",3,36],["add",44,113]],
    [["if",3,37],["add",44,113]],
    [["if",3,38],["add",44,113]],
    [["if",3,39],["add",44]],
    [["if",3,40],["add",51,52,55,56,58,60,62,63,65,67,71]],
    [["if",3,41],["add",80]],
    [["if",3,42],["add",86]],
    [["if",3,43],["add",88],["block",122,123,124,141]],
    [["if",3,44],["unless",45],["add",88]],
    [["if",46,47],["add",88]],
    [["if",3,49],["add",1]],
    [["if",3,51],["add",89,90]],
    [["if",52],["add",94]],
    [["if",52,53],["add",95,118],["block",112]],
    [["if",52,54],["add",100]],
    [["if",3,55],["add",101]],
    [["if",52,56,57],["add",101]],
    [["if",16,58],["add",102,142]],
    [["if",3,5],["add",109]],
    [["if",3,59],["add",113]],
    [["if",3,60],["add",113]],
    [["if",3,61],["add",113],["block",123,124]],
    [["if",3,62],["add",113]],
    [["if",3,63],["add",113]],
    [["if",3],["unless",64],["add",113]],
    [["if",3,65],["add",113]],
    [["if",3,66],["add",113]],
    [["if",3,67],["add",113]],
    [["if",3,68],["add",113]],
    [["if",3,69],["add",113,113]],
    [["if",3,70],["add",113]],
    [["if",0,2,3],["unless",1],["add",113]],
    [["if",3,71],["unless",72,73],["add",113]],
    [["if",8,74],["add",114,140]],
    [["if",75,76,77,78],["add",122,132]],
    [["if",3,83],["add",129]],
    [["if",16,84],["add",144]],
    [["if",16,85],["add",145]],
    [["if",16,86],["add",146]],
    [["if",3,24],["block",29,88,1]],
    [["if",3,48],["block",88]],
    [["if",3,50],["block",1]],
    [["if",3,79],["block",122,123,124,141]],
    [["if",3,80],["block",122,123,124,141]],
    [["if",3,81],["block",122,123,124,141]],
    [["if",3,82],["block",123,124]]]
},
"runtime":[
[],[]
]
};
var da=this,ha=function(){if(null===ea){var a;a:{var b=da.document,c=b.querySelector&&b.querySelector("script[nonce]");if(c){var d=c.nonce||c.getAttribute("nonce");if(d&&fa.test(d)){a=d;break a}}a=null}ea=a||""}return ea},fa=/^[\w+/_-]+[=]{0,2}$/,ea=null,ia=function(a,b){function c(){}c.prototype=b.prototype;a.qf=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Xe=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,
d)}};var g=function(a,b){this.B=a;this.wd=b};g.prototype.Jd=function(){return this.B};g.prototype.getType=g.prototype.Jd;g.prototype.getData=function(){return this.wd};g.prototype.getData=g.prototype.getData;var ka=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},la=function(){this.la={};this.Ba=!1};la.prototype.get=function(a){return this.la["dust."+a]};la.prototype.set=function(a,b){!this.Ba&&(this.la["dust."+a]=b)};la.prototype.has=function(a){return this.la.hasOwnProperty("dust."+a)};var ma=function(a){var b=[],c;for(c in a.la)a.la.hasOwnProperty(c)&&b.push(c.substr(5));return b};
la.prototype.remove=function(a){!this.Ba&&delete this.la["dust."+a]};la.prototype.L=function(){this.Ba=!0};var v=function(a){this.oa=new la;this.h=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ka(b)?this.h[Number(b)]=a[Number(b)]:this.oa.set(b,a[b]))};v.prototype.toString=function(){for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};v.prototype.set=function(a,b){if("length"==a){if(!ka(b))throw"RangeError: Length property must be a valid integer.";this.h.length=Number(b)}else ka(a)?this.h[Number(a)]=b:this.oa.set(a,b)};
v.prototype.set=v.prototype.set;v.prototype.get=function(a){return"length"==a?this.length():ka(a)?this.h[Number(a)]:this.oa.get(a)};v.prototype.get=v.prototype.get;v.prototype.length=function(){return this.h.length};v.prototype.U=function(){for(var a=ma(this.oa),b=0;b<this.h.length;b++)a.push(b+"");return new v(a)};v.prototype.getKeys=v.prototype.U;v.prototype.remove=function(a){ka(a)?delete this.h[Number(a)]:this.oa.remove(a)};v.prototype.remove=v.prototype.remove;v.prototype.pop=function(){return this.h.pop()};
v.prototype.pop=v.prototype.pop;v.prototype.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};v.prototype.push=v.prototype.push;v.prototype.shift=function(){return this.h.shift()};v.prototype.shift=v.prototype.shift;v.prototype.splice=function(a,b,c){return new v(this.h.splice.apply(this.h,arguments))};v.prototype.splice=v.prototype.splice;v.prototype.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};
v.prototype.unshift=v.prototype.unshift;v.prototype.has=function(a){return ka(a)&&this.h.hasOwnProperty(a)||this.oa.has(a)};var na=function(){function a(a,b){c[a]=b}function b(){c={};f=!1}var c={},d,e={},f=!1,h={add:a,Wb:function(a,b,c){e[a]||(e[a]={});e[a][b]=c},create:function(e){var h={add:a,assert:function(a,b){if(!f){var h=c[a]||d;h&&h.apply(e,Array.prototype.slice.call(arguments,0))}},reset:b};h.add=h.add;h.assert=h.assert;h.reset=h.reset;return h},yc:function(a){return e[a]?(b(),c=e[a],!0):!1},qa:function(a){d=a},reset:b,Ic:function(a){f=a}};h.add=h.add;h.addToCache=h.Wb;h.loadFromCache=h.yc;h.registerDefaultPermission=
h.qa;h.reset=h.reset;h.setPermitAllAsserts=h.Ic;return h};var oa=function(){function a(a,c){if(b[a]){if(b[a].Qa+c>b[a].max)throw Error("Quota exceeded");b[a].Qa+=c}}var b={},c=void 0,d=void 0,e={je:function(a){c=a},Xb:function(){c&&a(c,1)},ke:function(a){d=a},X:function(b){d&&a(d,b)},Ge:function(a,c){b[a]=b[a]||{Qa:0};b[a].max=c},Id:function(a){return b[a]&&b[a].Qa||0},reset:function(){b={}},qd:a};e.onFnConsume=e.je;e.consumeFn=e.Xb;e.onStorageConsume=e.ke;e.consumeStorage=e.X;e.setMax=e.Ge;e.getConsumed=e.Id;e.reset=e.reset;e.consume=e.qd;return e};var pa=function(a,b,c){this.M=a;this.I=b;this.aa=c;this.h=new la};pa.prototype.add=function(a,b){this.h.Ba||(this.M.X(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b))};pa.prototype.add=pa.prototype.add;pa.prototype.set=function(a,b){this.h.Ba||(this.aa&&this.aa.has(a)?this.aa.set(a,b):(this.M.X(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b)))};pa.prototype.set=pa.prototype.set;
pa.prototype.get=function(a){return this.h.has(a)?this.h.get(a):this.aa?this.aa.get(a):void 0};pa.prototype.get=pa.prototype.get;pa.prototype.has=function(a){return!!this.h.has(a)||!(!this.aa||!this.aa.has(a))};pa.prototype.has=pa.prototype.has;pa.prototype.K=function(){return this.M};pa.prototype.L=function(){this.h.L()};var qa=function(){},ra=function(a){return"function"==typeof a},sa=function(a){return"string"==typeof a},ta=function(a){return"number"==typeof a&&!isNaN(a)},ua=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},va=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},xa=function(a,b){if(!ta(a)||!ta(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a){return Math.round(Number(a))||
0},Aa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ba=function(a){var b=[];if(ua(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ca=function(){return new Date},Da=function(){this.prefix="gtm.";this.values={}};Da.prototype.set=function(a,b){this.values[this.prefix+a]=b};Da.prototype.get=function(a){return this.values[this.prefix+a]};Da.prototype.contains=function(a){return void 0!==this.get(a)};
var Ea=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Fa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ga=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ha=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1};var w=function(a,b){la.call(this);this.zc=a;this.Gd=b};ia(w,la);var Ja=function(a,b){for(var c,d=0;d<b.length&&!(c=Ia(a,b[d]),c instanceof g);d++);return c},Ia=function(a,b){var c=a.get(String(b[0]));if(!(c&&c instanceof w))throw"Attempting to execute non-function "+b[0]+".";return c.m.apply(c,[a].concat(b.slice(1)))};w.prototype.toString=function(){return this.zc};w.prototype.getName=function(){return this.zc};w.prototype.getName=w.prototype.getName;w.prototype.U=function(){return new v(ma(this))};
w.prototype.getKeys=w.prototype.U;w.prototype.m=function(a,b){var c,d={F:function(){return a},evaluate:function(b){var c=a;return ua(b)?Ia(c,b):b},ya:function(b){return Ja(a,b)},K:function(){return a.K()},hc:function(){c||(c=a.I.create(d));return c}};a.K().Xb();return this.Gd.apply(d,Array.prototype.slice.call(arguments,1))};w.prototype.invoke=w.prototype.m;var Ka=function(){la.call(this)};ia(Ka,la);Ka.prototype.U=function(){return new v(ma(this))};Ka.prototype.getKeys=Ka.prototype.U;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var La=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ma=function(a){if(null==a)return String(a);var b=La.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Na=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Oa=function(a){if(!a||"object"!=Ma(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Na(a,"constructor")&&!Na(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Na(a,b)},Pa=function(a,b){var c=b||("array"==Ma(a)?[]:{}),d;for(d in a)if(Na(a,d)){var e=a[d];"array"==Ma(e)?("array"!=Ma(c[d])&&(c[d]=[]),c[d]=Pa(e,c[d])):Oa(e)?(Oa(c[d])||(c[d]={}),c[d]=Pa(e,c[d])):c[d]=e}return c};var Qa=function(a){if(a instanceof v){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=Qa(a.get(d)));return b}if(a instanceof Ka){for(var e={},f=a.U(),h=f.length(),k=0;k<h;k++)e[f.get(k)]=Qa(a.get(f.get(k)));return e}return a instanceof w?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=Ra(b[c]);var d=new pa(oa(),na());return Qa(a.m.apply(a,[d].concat(b)))}:a},Ra=function(a){if(ua(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=Ra(a[c]));return new v(b)}if(Oa(a)){var d=
new Ka,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,Ra(a[e]));return d}if("function"===typeof a)return new w("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=Qa(this.evaluate(c[d]));return Ra(a.apply(a,c))});var f=typeof a;if(null===a||"string"===f||"number"===f||"boolean"===f)return a};var Sa={control:function(a,b){return new g(a,this.evaluate(b))},fn:function(a,b,c){var d=this.F(),e=this.evaluate(b);if(!(e instanceof v))throw"Error: non-List value given for Fn argument names.";var f=Array.prototype.slice.call(arguments,2);this.K().X(a.length+f.length);return new w(a,function(){return function(a){for(var b=new pa(d.M,d.I,d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof g)return c[h];for(var n=e.get("length"),p=0;p<n;p++)p<
c.length?b.set(e.get(p),c[p]):b.set(e.get(p),void 0);b.set("arguments",new v(c));var q=Ja(b,f);if(q instanceof g)return"return"===q.B?q.getData():q}}())},list:function(a){var b=this.K();b.X(arguments.length);for(var c=new v,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.X(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.K(),c=new Ka,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=this.evaluate(arguments[d+1]),h=e.length;
h+="string"===typeof f?f.length:1;b.X(h);c.set(e,f)}return c},undefined:function(){}};var x=function(){this.M=oa();this.I=na();this.za=new pa(this.M,this.I)};x.prototype.W=function(a,b){var c=new w(a,b);c.L();this.za.set(a,c)};x.prototype.addInstruction=x.prototype.W;x.prototype.Vb=function(a,b){Sa.hasOwnProperty(a)&&this.W(b||a,Sa[a])};x.prototype.addNativeInstruction=x.prototype.Vb;x.prototype.K=function(){return this.M};x.prototype.getQuota=x.prototype.K;x.prototype.Xa=function(){this.M=oa();this.za.M=this.M};x.prototype.resetQuota=x.prototype.Xa;
x.prototype.De=function(){this.I=na();this.za.I=this.I};x.prototype.resetPermissions=x.prototype.De;x.prototype.S=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.yb(c)};x.prototype.execute=x.prototype.S;x.prototype.yb=function(a){for(var b,c=0;c<arguments.length;c++){var d=Ia(this.za,arguments[c]);b=d instanceof g||d instanceof w||d instanceof v||d instanceof Ka||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};
x.prototype.run=x.prototype.yb;x.prototype.L=function(){this.za.L()};x.prototype.makeImmutable=x.prototype.L;var Ta=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var Ua={Ke:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(d=1;d<arguments.length;d++)if(arguments[d]instanceof v)for(var e=arguments[d],f=0;f<e.length();f++)c.push(e.get(f));else c.push(arguments[d]);return new v(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.m(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.m(a,this.get(e),e,this)&&d.push(this.get(e));return new v(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.m(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.m(a,this.get(e),e,this));return new v(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw"TypeError: Reduce on List with no elements.";for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw"TypeError: Reduce on List with no elements.";}for(h=f;h<d;h++)this.has(h)&&(e=b.m(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw"TypeError: ReduceRight on List with no elements.";for(var h=1;h<=d;h++)if(this.has(d-
h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw"TypeError: ReduceRight on List with no elements.";}for(h=f;0<=h;h--)this.has(h)&&(e=b.m(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Ta(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,
c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new v(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.m(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Ta(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.m(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,1,arguments.length-1))},toString:function(){return this.toString()},
unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var y={qc:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},Va="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Wa=new g("break"),Xa=new g("continue");y.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};y.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
y.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof v))throw"Error: Non-List argument given to Apply instruction.";if(null===a||void 0===a)throw"TypeError: Can't read property "+b+" of "+a+".";if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw"TypeError: "+a+"."+b+" is not a function.";}if("string"==typeof a){if(0<=va(Va,b))return Ra(a[b].apply(a,Ta(c)));throw"TypeError: "+b+" is not a function";}if(a instanceof v){if(a.has(b)){var d=
a.get(b);if(d instanceof w){var e=Ta(c);e.unshift(this.F());return d.m.apply(d,e)}throw"TypeError: "+b+" is not a function";}if(0<=va(Ua.Ke,b))return e=Ta(c),e.unshift(this.F()),Ua[b].apply(a,e)}if(a instanceof w||a instanceof Ka){if(a.has(b)){d=a.get(b);if(d instanceof w)return e=Ta(c),e.unshift(this.F()),d.m.apply(d,e);throw"TypeError: "+b+" is not a function";}if("toString"==b)return a instanceof w?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,Ta(c))}throw"TypeError: Object has no '"+
b+"' property.";};y.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw"Invalid key name given for assignment.";var c=this.F();if(!c.has(a))throw"Attempting to assign to undefined value "+b;var d=this.evaluate(b);c.set(a,d);return d};y["break"]=function(){return Wa};y["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof g)return d}};y["continue"]=function(){return Xa};
y.xd=function(a,b,c){var d=new v;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[y.qc.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.F().set(a,this.evaluate(f))};y.Ad=function(a,b){return this.evaluate(a)/this.evaluate(b)};y.Dd=function(a,b){return this.evaluate(a)==this.evaluate(b)};y.Ed=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
y.Hd=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.F();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var f=this.ya(c);if(f instanceof g){if("break"==f.B)break;if("return"==f.B)return f}}else if(b instanceof Ka||b instanceof v||b instanceof w){var h=b.U(),k=h.length();for(e=0;e<k;e++)if(d.set(a,h.get(e)),f=this.ya(c),f instanceof g){if("break"==f.B)break;if("return"==f.B)return f}}};y.get=function(a){return this.F().get(this.evaluate(a))};
y.ic=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw"TypeError: cannot access property of "+a+".";a instanceof Ka||a instanceof v||a instanceof w?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ka(b)&&(c=a[b]));return c};y.Kd=function(a,b){return this.evaluate(a)>this.evaluate(b)};y.Ld=function(a,b){return this.evaluate(a)>=this.evaluate(b)};y.Sd=function(a,b){return this.evaluate(a)===this.evaluate(b)};y.Td=function(a,b){return this.evaluate(a)!==this.evaluate(b)};
y["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.ya(d);if(e instanceof g)return e};y.ae=function(a,b){return this.evaluate(a)<this.evaluate(b)};y.be=function(a,b){return this.evaluate(a)<=this.evaluate(b)};y.de=function(a,b){return this.evaluate(a)%this.evaluate(b)};y.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};y.ee=function(a){return-this.evaluate(a)};y.fe=function(a){return!this.evaluate(a)};
y.he=function(a,b){return this.evaluate(a)!=this.evaluate(b)};y["null"]=function(){return null};y.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};y.Ec=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};y.Fc=function(a){return this.evaluate(a)};y.quote=function(a){return Array.prototype.slice.apply(arguments)};y["return"]=function(a){return new g("return",this.evaluate(a))};
y.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw"TypeError: Can't set property "+b+" of "+a+".";(a instanceof w||a instanceof v||a instanceof Ka)&&a.set(b,c);return c};y.Je=function(a,b){return this.evaluate(a)-this.evaluate(b)};
y["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!ua(b)||!ua(c))throw"Error: Malformed switch instruction.";for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof g){var h=d.B;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof g&&("return"==d.B||"continue"==d.B)))return d};
y.Le=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};y["typeof"]=function(a){a=this.evaluate(a);return a instanceof w?"function":typeof a};y.undefined=function(){};y["var"]=function(a){for(var b=this.F(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
y["while"]=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.ya(f),e instanceof g)){if("break"==e.B)return;if("return"==e.B)return e}for(;this.evaluate(a);){e=this.ya(f);if(e instanceof g){if("break"==e.B)break;if("return"==e.B)return e}this.evaluate(b)}};var $a=function(){this.oc=!1;this.H=new x;Ya(this);this.oc=!0};$a.prototype.Yd=function(){return this.oc};$a.prototype.isInitialized=$a.prototype.Yd;$a.prototype.S=function(a){this.H.I.yc(String(a[0]))||(this.H.I.reset(),this.H.I.Ic(!0));return this.H.yb(a)};$a.prototype.execute=$a.prototype.S;$a.prototype.L=function(){this.H.L()};$a.prototype.makeImmutable=$a.prototype.L;
var Ya=function(a){function b(a,b){e.H.Vb(a,String(b))}function c(a,b){e.H.W(String(d[a]),b)}var d=y.qc,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",y.add);c("AND",y.and);c("APPLY",y.apply);c("ASSIGN",y.assign);c("BREAK",y["break"]);c("CASE",y["case"]);c("CONTINUE",y["continue"]);c("DEFAULT",y["case"]);c("DEFN",y.xd);c("DIVIDE",y.Ad);c("EQUALS",y.Dd);c("EXPRESSION_LIST",y.Ed);c("FOR_IN",y.Hd);c("GET",y.get);c("GET_INDEX",
y.ic);c("GET_PROPERTY",y.ic);c("GREATER_THAN",y.Kd);c("GREATER_THAN_EQUALS",y.Ld);c("IDENTITY_EQUALS",y.Sd);c("IDENTITY_NOT_EQUALS",y.Td);c("IF",y["if"]);c("LESS_THAN",y.ae);c("LESS_THAN_EQUALS",y.be);c("MODULUS",y.de);c("MULTIPLY",y.multiply);c("NEGATE",y.ee);c("NOT",y.fe);c("NOT_EQUALS",y.he);c("NULL",y["null"]);c("OR",y.or);c("POST_DECREMENT",y.Ec);c("POST_INCREMENT",y.Ec);c("PRE_DECREMENT",y.Fc);c("PRE_INCREMENT",y.Fc);c("QUOTE",y.quote);c("RETURN",y["return"]);c("SET_PROPERTY",y.setProperty);
c("SUBTRACT",y.Je);c("SWITCH",y["switch"]);c("TERNARY",y.Le);c("TYPEOF",y["typeof"]);c("VAR",y["var"]);c("WHILE",y["while"])};$a.prototype.W=function(a,b){this.H.W(a,b)};$a.prototype.addInstruction=$a.prototype.W;$a.prototype.K=function(){return this.H.K()};$a.prototype.getQuota=$a.prototype.K;$a.prototype.Xa=function(){this.H.Xa()};$a.prototype.resetQuota=$a.prototype.Xa;$a.prototype.qa=function(a){this.H.I.qa(a)};$a.prototype.Oa=function(a,b,c){this.H.I.Wb(a,b,c)};var ab=function(){this.Ta={}};ab.prototype.get=function(a){return this.Ta.hasOwnProperty(a)?this.Ta[a]:void 0};ab.prototype.add=function(a,b){if(this.Ta.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";var c=new w(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.L();this.Ta[a]=c};ab.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var z=window,B=document,bb=navigator,cb=function(a,b){var c=z[a];z[a]=void 0===c?b:c;return z[a]},db=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},eb=function(a,b,c){var d=B.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;db(d,b);c&&(d.onerror=c);ha()&&d.setAttribute("nonce",ha());var e=B.getElementsByTagName("script")[0]||B.body||B.head;e.parentNode.insertBefore(d,e);return d},
fb=function(a,b){var c=B.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=B.body&&B.body.lastChild||B.body||B.head;d.parentNode.insertBefore(c,d);db(c,b);void 0!==a&&(c.src=a);return c},E=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},gb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},hb=function(a,b,
c,d){a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent&&a.detachEvent("on"+b,c)},H=function(a){z.setTimeout(a,0)},kb=function(a){var b=B.getElementById(a);if(b&&jb(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(jb(document.all[a][c],"id")==a)return document.all[a][c];return b},jb=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},lb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=
b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},mb=function(a){var b=B.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},nb=function(a){bb.sendBeacon&&bb.sendBeacon(a)||E(a)};var ob=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var pb=/:[0-9]+$/,qb=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")==b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},rb=function(a,b,c,d,e){var f,h=function(a){return a?a.replace(":","").toLowerCase():""},k=h(a.protocol)||h(z.location.protocol);b&&(b=String(b).toLowerCase());switch(b){case "protocol":f=k;break;case "host":f=(a.hostname||z.location.hostname).replace(pb,"").toLowerCase();
if(c){var l=/^www\d*\./.exec(f);l&&l[0]&&(f=f.substr(l[0].length))}break;case "port":f=String(Number(a.hostname?a.port:z.location.port)||("http"==k?80:"https"==k?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=f.split("/");0<=va(d||[],m[m.length-1])&&(m[m.length-1]="");f=m.join("/");break;case "query":f=a.search.replace("?","");e&&(f=qb(f,e));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=
a.hash.replace("#","");break;default:f=a&&a.href}return f},sb=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},N=function(a){var b=document.createElement("a");a&&(ob.test(a),b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(pb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var vb=function(){this.Wa=new $a;var a=new ab;a.addAll(tb());ub(this,function(b){return a.get(b)})},tb=function(){return{callInWindow:wb,callLater:yb,copyFromWindow:zb,encodeURI:encodeURI,encodeURIComponent:encodeURIComponent,getReferrer:Ab,getUrl:Bb,getUrlComponent:Cb,getUrlFragment:Db,isPlainObject:Eb,loadIframe:Fb,loadJavaScript:Gb,logToConsole:Hb,queryPermission:Ib,removeUrlFragment:Jb,replaceAll:Kb,sendPixel:Lb,setInWindow:Mb}};vb.prototype.S=function(a){return this.Wa.S(a)};
vb.prototype.execute=vb.prototype.S;var ub=function(a,b){a.Wa.W("require",b)};vb.prototype.qa=function(a){this.Wa.qa(a)};vb.prototype.Oa=function(a,b,c){this.Wa.Oa(a,b,c)};function wb(a,b){for(var c=a.split("."),d=z,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"==Ma(e)){var h=[];for(f=1;f<arguments.length;f++)h.push(Qa(arguments[f]));e.apply(d,h)}}function yb(a){var b=this.F();H(function(){a instanceof w&&a.m(b)})}function Bb(){return z.location.href}
function zb(a,b,c){for(var d=a.split("."),e=z,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e||null===e)return;b&&(void 0===e[d[f]]||c&&!e[d[f]])&&(e[d[f]]=Qa(b));return Ra(e[d[f]])}function Ab(){return B.referrer}function Cb(a,b,c,d,e){var f;if(d&&d instanceof v){f=[];for(var h=0;h<d.length();h++){var k=d.get(h);"string"==typeof k&&f.push(k)}}return rb(N(a),b,c,f,e)}function Db(a){return rb(N(a),"fragment")}function Eb(a){return a instanceof Ka}
function Fb(a,b){var c=this.F();fb(a,function(){b instanceof w&&b.m(c)})}var Nb={};
function Gb(a,b,c,d){this.hc().assert("networkAccess",a);var e=this.F(),f=function(){b instanceof w&&b.m(e)},h=function(){c instanceof w&&c.m(e)};d?Nb[d]?(Nb[d].onSuccess.push(f),Nb[d].onFailure.push(h)):(Nb[d]={onSuccess:[f],onFailure:[h]},f=function(){for(var a=Nb[d].onSuccess,b=0;b<a.length;b++)H(a[b]);a.push=function(a){H(a);return 0}},h=function(){for(var a=Nb[d].onFailure,b=0;b<a.length;b++)H(a[b]);Nb[d]=null},eb(a,f,h)):eb(a,f,h)}
function Hb(){for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=Qa(a[b]);console.log.apply(console,a)}function Jb(a){return sb(N(a))}function Kb(a,b,c){return a.replace(new RegExp(b,"g"),c)}function Lb(a,b,c){var d=this.F();E(a,function(){b instanceof w&&b.m(d)},function(){c instanceof w&&c.m(d)})}function Mb(a,b,c){for(var d=a.split("."),e=z,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=Qa(b),!0):!1}
function Ib(a,b){try{return this.hc().assert.apply(null,Array.prototype.slice.call(arguments,0)),!0}catch(c){return!1}};
var Ob=[],Pb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Qb=function(a){return Pb[a]},Rb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Xb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Yb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Zb=function(a){return Yb[a]};
Ob[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Xb,Zb)+"'"}};var gc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,hc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ic=function(a){return hc[a]};Ob[16]=function(a){return a};var kc,lc=[],mc=[],nc=[],oc=[],pc=[],qc={},rc,sc,tc,uc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=!!qc[b],d={},e;for(e in a)a.hasOwnProperty(e)&&0===e.indexOf("vtp_")&&(d[c?e:e.substr(4)]=a[e]);return c?qc[b](d):kc(b,d)},yc=function(a,b,c,d){c=c||[];d=d||qa;var e={},f;for(f in a)a.hasOwnProperty(f)&&(e[f]=xc(a[f],b,c,d));return e},xc=function(a,b,c,d){if(ua(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var f=1;f<
a.length;f++)e.push(xc(a[f],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=lc[h];if(!k||b(k))return;c[h]=!0;try{var l=yc(k,b,c,d);e=uc(l);tc&&(e=tc.sd(e,l))}catch(A){d(h,A),e=!1}c[h]=!1;return e;case "map":e={};for(var m=1;m<a.length;m+=2)e[xc(a[m],b,c,d)]=xc(a[m+1],b,c,d);return e;case "template":e=[];for(var n=!1,p=1;p<a.length;p++){var q=xc(a[p],b,c,d);sc&&(n=n||q===sc.Ja);e.push(q)}return sc&&n?sc.td(e):e.join("");case "escape":e=xc(a[1],b,c,d);if(sc&&ua(a[1])&&"macro"===a[1][0]&&
sc.Zd(a))return sc.qe(e);e=String(e);for(var r=2;r<a.length;r++)Ob[a[r]]&&(e=Ob[a[r]](e));return e;case "tag":var u=a[1];if(!oc[u])throw Error("Unable to resolve tag reference "+u+".");return e={bc:a[2],index:u};case "zb":var t=zc({"function":a[1],arg0:a[2],arg1:a[3],ignore_case:a[5]},b,c,d);a[4]&&(t=!t);return t;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},zc=function(a,b,c,d){try{return rc(yc(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var Ac=null,Ec=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];Ac=Bc(a,Cc()||function(){});for(var e=0;e<mc.length;e++){var f=mc[e],h=Dc(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}var m=[];for(e=0;e<oc.length;e++)c[e]&&!d[e]&&(m[e]=!0);return m},Dc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Ac(b[c]);if(!d)return null===d?null:!1}var e=a.unless||[];for(c=0;c<e.length;c++){d=Ac(e[c]);if(null===
d)return null;if(d)return!1}return!0};var Bc=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=zc(nc[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Fc,Gc=function(){};(function(){function a(a,h){a=a||"";h=h||{};for(var k in b)b.hasOwnProperty(k)&&(h.bd&&(h["fix_"+k]=!0),h.cc=h.cc||h["fix_"+k]);var l={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var b=a.indexOf("--\x3e");if(0<=b)return{content:a.substr(4,b),length:b+3}},endTag:function(){var b=a.match(d);if(b)return{tagName:b[1],length:b[0].length}},atomicTag:function(){var b=p.startTag();
if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,C:b.C,content:d[1],length:d[0].length+b.length}}}},startTag:function(){var b=a.match(c);if(b){var d={};b[2].replace(e,function(a,b,c,e,h){var k=c||e||h||f.test(b)&&b||null,l=document.createElement("div");l.innerHTML=k;d[b]=l.textContent||l.innerText||k});return{tagName:b[1],C:d,Ha:!!b[3],length:b[0].length}}},chars:function(){var b=
a.indexOf("<");return{length:0<=b?b:a.length}}},q=function(){for(var b in l)if(l[b].test(a)){var c=p[b]();return c?(c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}};h.cc&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.wc=function(){return this[this.length-1]};d.qb=function(a){var b=this.wc();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()};d.rd=
function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){a&&"startTag"===a.type&&(a.Ha=b.test(a.tagName)||a.Ha);return a},f=q,k=function(){a="</"+d.pop().tagName+">"+a},l={startTag:function(b){var e=b.tagName;"TR"===e.toUpperCase()&&d.qb("TABLE")?(a="<TBODY>"+a,m()):h.bf&&c.test(e)&&d.rd(e)?d.qb(e)?k():(a="</"+b.tagName+">"+a,m()):b.Ha||d.push(b)},endTag:function(a){d.wc()?h.Fd&&!d.qb(a.tagName)?k():d.pop():h.Fd&&(f(),m())}},m=function(){var b=a,c=e(f());a=b;if(c&&
l[c.type])l[c.type](c)};q=function(){m();return e(f())}}();return{append:function(b){a+=b},we:q,jf:function(a){for(var b;(b=q())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var b=a;a="";return b},kf:function(){return a},stack:[]}}var b=function(){var a={},b=this.document.createElement("div");b.innerHTML="<P><I></P></I>";a.rf="<P><I></P></I>"!==b.innerHTML;b.innerHTML="<P><i><P></P></i></P>";a.nf=2===b.childNodes.length;return a}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.sf=function(a){var b={comment:function(a){return"<--"+a.content+"--\x3e"},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName,c;for(c in a.C){var d=a.C[c];
b+=" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return b+(a.Ha?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)};a.af=function(a){var b={},c;for(c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.gd=a.gd||!b[h]&&h;Fc=a})();(function(){function a(){}function b(a){return void 0!==a&&null!==a}function c(a,b,c){var d,e=a&&a.length||0;for(d=0;d<e;d++)b.call(c,a[d],d)}function d(a,b,c){for(var d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function e(a,
b){d(b,function(b,c){a[b]=c});return a}function f(a,c){a=a||{};d(c,function(c,d){b(a[c])||(a[c]=d)});return a}function h(a){try{return m.call(a)}catch(r){var b=[];c(a,function(a){b.push(a)});return b}}var k={Uc:a,Vc:a,Wc:a,Xc:a,cd:a,dd:function(a){return a},done:a,error:function(a){throw a;},Ae:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function a(a,c,d){var e="data-ps-"+c;if(2===arguments.length){var f=a.getAttribute(e);return b(f)?String(f):f}b(d)&&""!==d?a.setAttribute(e,
d):a.removeAttribute(e)}function f(b,c){var d=b.ownerDocument;e(this,{root:b,options:c,Ia:d.defaultView||d.parentWindow,ka:d,Va:Fc("",{bd:!0}),fb:[b],wb:"",xb:d.createElement(b.nodeName),Fa:[],da:[]});a(this.xb,"proxyof",0)}f.prototype.write=function(){[].push.apply(this.da,arguments);for(var a;!this.Ra&&this.da.length;)a=this.da.shift(),"function"===typeof a?this.ld(a):this.Hb(a)};f.prototype.ld=function(a){var b={type:"function",value:a.name||a.toString()};this.tb(b);a.call(this.Ia,this.ka);this.Bc(b)};
f.prototype.Hb=function(a){this.Va.append(a);for(var b,c=[],d,e;(b=this.Va.we())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(e=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.Re(c);d&&this.Md(b);e&&this.Nd(b)};f.prototype.Re=function(a){var b=this.hd(a);b.Ub&&(b.mb=this.wb+b.Ub,this.wb+=b.ve,this.xb.innerHTML=b.mb,this.Pe())};f.prototype.hd=function(a){var b=this.fb.length,d=[],e=[],f=[];c(a,function(a){d.push(a.text);if(a.C){if(!/^noscript$/i.test(a.tagName)){var c=
b++;e.push(a.text.replace(/(\/?>)/," data-ps-id="+c+" $1"));"ps-script"!==a.C.id&&"ps-style"!==a.C.id&&f.push("atomicTag"===a.type?"":"<"+a.tagName+" data-ps-proxyof="+c+(a.Ha?" />":">"))}}else e.push(a.text),f.push("endTag"===a.type?a.text:"")});return{tf:a,raw:d.join(""),Ub:e.join(""),ve:f.join("")}};f.prototype.Pe=function(){for(var c,d=[this.xb];b(c=d.shift());){var e=1===c.nodeType;if(!e||!a(c,"proxyof")){e&&(this.fb[a(c,"id")]=c,a(c,"id",null));var f=c.parentNode&&a(c.parentNode,"proxyof");
f&&this.fb[f].appendChild(c)}d.unshift.apply(d,h(c.childNodes))}};f.prototype.Md=function(a){var b=this.Va.clear();b&&this.da.unshift(b);a.src=a.C.src||a.C.Ue;a.src&&this.Fa.length?this.Ra=a:this.tb(a);var c=this;this.Qe(a,function(){c.Bc(a)})};f.prototype.Nd=function(a){var b=this.Va.clear();b&&this.da.unshift(b);a.type=a.C.type||a.C.Ve||"text/css";this.Se(a);b&&this.write()};f.prototype.Se=function(a){var b=this.kd(a);this.Xd(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:
b.appendChild(this.ka.createTextNode(a.content)))};f.prototype.kd=function(a){var b=this.ka.createElement(a.tagName);b.setAttribute("type",a.type);d(a.C,function(a,c){b.setAttribute(a,c)});return b};f.prototype.Xd=function(a){this.Hb('<span id="ps-style"/>');var b=this.ka.getElementById("ps-style");b.parentNode.replaceChild(a,b)};f.prototype.tb=function(a){a.me=this.da;this.da=[];this.Fa.unshift(a)};f.prototype.Bc=function(a){a!==this.Fa[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Fa.shift(),this.write.apply(this,a.me),!this.Fa.length&&this.Ra&&(this.tb(this.Ra),this.Ra=null))};f.prototype.Qe=function(a,b){var c=this.jd(a),d=this.He(c),e=this.options.Uc;a.src&&(c.src=a.src,this.Fe(c,d?e:function(){b();e()}));try{this.Wd(c),a.src&&!d||b()}catch(C){this.options.error(C),b()}};f.prototype.jd=function(a){var b=this.ka.createElement(a.tagName);d(a.C,function(a,c){b.setAttribute(a,c)});a.content&&(b.text=a.content);return b};f.prototype.Wd=function(a){this.Hb('<span id="ps-script"/>');
var b=this.ka.getElementById("ps-script");b.parentNode.replaceChild(a,b)};f.prototype.Fe=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;e(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var e={message:"remote script failed "+a.src};c();d(e);b()}})};f.prototype.He=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.Ae&&a.src&&a.hasAttribute("async"))};
return f}();l.postscribe=function(){function b(){var a=m.shift(),b;a&&(b=a[a.length-1],b.Vc(),a.stream=c.apply(null,a),b.Wc())}function c(c,f,k){function l(a){a=k.dd(a);t.write(a);k.Xc(a)}t=new n(c,k);t.id=d++;t.name=k.name||t.id;var m=c.ownerDocument,p={close:m.close,open:m.open,write:m.write,writeln:m.writeln};e(m,{close:a,open:a,write:function(){return l(h(arguments).join(""))},writeln:function(){return l(h(arguments).join("")+"\n")}});var q=t.Ia.onerror||a;t.Ia.onerror=function(a,b,c){k.error({ef:a+
" - "+b+":"+c});q.apply(t.Ia,arguments)};t.write(f,function(){e(m,p);t.Ia.onerror=q;k.done();t=null;b()});return t}var d=0,m=[],t=null;return e(function(c,d,e){"function"===typeof e&&(e={done:e});e=f(e,k);c=/^#/.test(c)?l.document.getElementById(c.substr(1)):c.cf?c[0]:c;var h=[c,d,e];c.pe={cancel:function(){h.stream?h.stream.abort():h[1]=a}};e.cd(h);m.push(h);t||b();return c.pe},{streams:{},hf:m,We:n})}();Gc=l.postscribe}})();var Hc={},Ic=null;Hc.o="GTM-7BF3X";var Jc=null,Kc="//www.googletagmanager.com/a?id="+Hc.o+"&cv=289",Lc={},Mc={},Nc=B.currentScript?B.currentScript.src:void 0,Oc=function(){var a=Ic.sequence||0;Ic.sequence=a+1;return a};var P=function(){var a=function(a){return{toString:function(){return a}}};return{Kb:a("convert_case_to"),Lb:a("convert_false_to"),Mb:a("convert_null_to"),Nb:a("convert_true_to"),Ob:a("convert_undefined_to"),P:a("function"),Lc:a("instance_name"),Mc:a("live_only"),Nc:a("malware_disabled"),Oc:a("once_per_event"),Qb:a("once_per_load"),Rb:a("setup_tags"),Pc:a("tag_id"),Sb:a("teardown_tags")}}();var Pc=new Da,Qc={},Tc={set:function(a,b){Pa(Rc(a,b),Qc)},get:function(a){return Sc(a,2)},reset:function(){Pc=new Da;Qc={}}},Sc=function(a,b){return 2!=b?Pc.get(a):Uc(a)},Uc=function(a,b,c){var d=a.split(".");return Wc(d)},Wc=function(a){for(var b=Qc,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Yc=function(a,b){Pc.set(a,b);Pa(Rc(a,b),Qc)},Rc=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var Zc=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),$c={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ad={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},bd=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};
var cd=function(a){var b=Sc("gtm.whitelist");var c=b&&bd(Ba(b),$c),d=Sc("gtm.blacklist")||Sc("tagTypeBlacklist")||[];
Zc.test(z.location&&z.location.hostname)&&(d=Ba(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&bd(Ba(d),ad),f={};return function(h){var k=h&&h[P.P];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Mc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>va(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>va(c,l[p])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var q=!1;if(d){var r;if(!(r=0<=
va(e,k)))a:{for(var u=l||[],t=new Da,A=0;A<e.length;A++)t.set(e[A],!0);for(var D=0;D<u.length;D++)if(t.get(u[D])){r=!0;break a}r=!1}q=r}return f[k]=!m||q}};var dd={sd:function(a,b){b[P.Kb]&&"string"===typeof a&&(a=1==b[P.Kb]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(P.Mb)&&null===a&&(a=b[P.Mb]);b.hasOwnProperty(P.Ob)&&void 0===a&&(a=b[P.Ob]);b.hasOwnProperty(P.Nb)&&!0===a&&(a=b[P.Nb]);b.hasOwnProperty(P.Lb)&&!1===a&&(a=b[P.Lb]);return a}};var ed=function(a){this.ne=a};ia(ed,Error);ed.prototype.getParameters=function(){return this.ne};var fd=function(a){var b=Ic.zones;!b&&a&&(b=Ic.zones=a());return b},gd={active:!0,isWhitelisted:function(){return!0}};var hd=!1,id=0,jd=[];function kd(a){if(!hd){var b=B.createEventObject,c="complete"==B.readyState,d="interactive"==B.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){hd=!0;for(var e=0;e<jd.length;e++)H(jd[e])}jd.push=function(){for(var a=0;a<arguments.length;a++)H(arguments[a]);return 0}}}function ld(){if(!hd&&140>id){id++;try{B.documentElement.doScroll("left"),kd()}catch(a){z.setTimeout(ld,50)}}}var md=function(a){hd?a():jd.push(a)};var nd=!1,pd=function(){return z.GoogleAnalyticsObject&&z[z.GoogleAnalyticsObject]};var qd=function(a){z.GoogleAnalyticsObject||(z.GoogleAnalyticsObject=a||"ga");var b=z.GoogleAnalyticsObject;if(!z[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(Ca());z[b]=c}return z[b]},rd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=pd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var vd=function(){return"&tc="+oc.filter(function(a){return a}).length},wd="0.005000">Math.random(),xd=function(){var a=0,b=0;return{$d:function(){if(2>a)return!1;1E3<=Ca().getTime()-b&&(a=0);return 2<=a},ye:function(){1E3<=Ca().getTime()-b&&(a=0);a++;b=Ca().getTime()}}},yd="",zd=function(){yd=[Kc,"&v=3&t=t","&pid="+xa(),"&rv=9o"].join("")},Ad={},Bd="",Cd=void 0,Dd={},Ed={},Fd=void 0,Gd=null,Hd=1E3,Id=function(){var a=Cd;return void 0===a?"":[yd,Ad[a]?"":"&es=1",
Dd[a],vd(),Bd,"&z=0"].join("")},Jd=function(){Fd&&(z.clearTimeout(Fd),Fd=void 0);void 0===Cd||Ad[Cd]&&!Bd||(Ed[Cd]||Gd.$d()||0>=Hd--?Ed[Cd]=!0:(Gd.ye(),E(Id()),Ad[Cd]=!0,Bd=""))},Kd=function(a,b,c){if(wd&&!Ed[a]&&b){a!==Cd&&(Jd(),Cd=a);var d=c+String(b[P.P]||"").replace(/_/g,"");Bd=Bd?Bd+"."+d:"&tr="+d;Fd||(Fd=z.setTimeout(Jd,500));2022<=Id().length&&Jd()}};function Ld(a,b,c,d,e,f){var h=oc[a],k=Md(a,b,c,d,e,f);if(!k)return null;var l=xc(h[P.Rb],f.Z,[],Nd());if(l&&l.length){var m=l[0];k=Ld(m.index,b,k,1===m.bc?e:k,e,f)}return k}
function Md(a,b,c,d,e,f){function h(){var b=yc(k,f.Z,[],l);b.vtp_gtmOnSuccess=function(){Kd(f.id,oc[a],"5");c()};b.vtp_gtmOnFailure=function(){Kd(f.id,oc[a],"6");d()};b.vtp_gtmTagId=k.tag_id;if(k[P.Nc])d();else{Kd(f.id,k,"1");try{uc(b)}catch(D){Kd(f.id,
k,"7");e()}}}var k=oc[a];if(f.Z(k))return null;var l=Nd(),m=xc(k[P.Sb],f.Z,[],l);if(m&&m.length){var n=m[0],p=Ld(n.index,b,c,d,e,f);if(!p)return null;c=p;d=2===n.bc?e:p}if(k[P.Qb]||k[P.Oc]){var q=k[P.Qb]?pc:b,r=c,u=d;if(!q[a]){h=Fa(h);var t=Od(a,q,h);c=t.V;d=t.ma}return function(){q[a](r,u)}}return h}
function Od(a,b,c){var d=[],e=[];b[a]=Pd(d,e,c);return{V:function(){b[a]=Qd;for(var c=0;c<d.length;c++)d[c]()},ma:function(){b[a]=Rd;for(var c=0;c<e.length;c++)e[c]()}}}function Pd(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Qd(a){a()}function Rd(a,b){b()}function Nd(){return function(){}};function Sd(a){var b=0,c=0,d=!1;return{add:function(){c++;return Fa(function(){b++;d&&b>=c&&a()})},$c:function(){d=!0;b>=c&&a()}}}function Td(a,b){if(!wd)return;var c=function(a){var d=b.Z(oc[a])?"3":"4",f=xc(oc[a][P.Rb],b.Z,[],qa);f&&f.length&&c(f[0].index);Kd(b.id,oc[a],d);var h=xc(oc[a][P.Sb],b.Z,[],qa);h&&h.length&&c(h[0].index)};c(a);}var Ud=!1;function Cc(){return function(){}};var Vd=function(a,b){var c={};c[P.P]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);for(d in void 0)(void 0).hasOwnProperty(d)&&(c[d]=(void 0)[d]);oc.push(c);return oc.length-1};var Wd="allow_ad_personalization_signals cookie_domain cookie_expires cookie_name cookie_path custom_params event_callback event_timeout groups send_to send_page_view session_duration user_properties".split(" ");var Xd=/[A-Z]+/,Yd=/\s/,Zd=function(a){if(sa(a)&&(a=a.trim(),!Yd.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Xd.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],Y:d}}}}};var $d=null,ae={},be={},ce;function de(){$d=$d||!Ic.gtagRegistered;Ic.gtagRegistered=!0;return $d}var ee=function(a,b){var c={event:a};b&&(c.eventModel=Pa(b),b.event_callback&&(c.eventCallback=b.event_callback),b.event_timeout&&(c.eventTimeout=b.event_timeout));return c};
function fe(a){if(void 0===be[a.id]){var b;if("UA"==a.prefix)b=Vd("gtagua",{trackingId:a.id});else if("AW"==a.prefix)b=Vd("gtagaw",{conversionId:a});else if("DC"==a.prefix)b=Vd("gtagfl",{targetId:a.id});else if("GF"==a.prefix)b=Vd("gtaggf",{conversionId:a});else if("G"==a.prefix)b=Vd("get",{trackingId:a.id,isAutoTag:!0});else if("HA"==a.prefix)b=Vd("gtagha",{conversionId:a});else return;if(!ce){var c={name:"send_to",dataLayerVersion:2},d={};d[P.P]="__v";for(var e in c)c.hasOwnProperty(e)&&(d["vtp_"+
e]=c[e]);lc.push(d);ce=["macro",lc.length-1]}var f={arg0:ce,arg1:a.id,ignore_case:!1};f[P.P]="_lc";nc.push(f);var h={"if":[nc.length-1],add:[b]};h["if"]&&(h.add||h.block)&&mc.push(h);be[a.id]=b}}
var he={event:function(a){var b=a[1];if(sa(b)&&!(3<a.length)){var c;if(2<a.length){if(!Oa(a[2]))return;c=a[2]}var d=ee(b,c);return d}},set:function(a){var b;2==a.length&&Oa(a[1])?
b=Pa(a[1]):3==a.length&&sa(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Pa(b),b.event="gtag.set",b._clear=!0,b},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},config:function(a){}},ge=Fa(function(){});var ie=!1,je=[];function ke(){if(!ie){ie=!0;for(var a=0;a<je.length;a++)H(je[a])}};var le=[],me=!1,ne=function(a){var b=a.eventCallback,c=Fa(function(){ra(b)&&H(function(){b(Hc.o)})}),d=a.eventTimeout;d&&z.setTimeout(c,Number(d));return c},oe=function(){for(var a=!1;!me&&0<le.length;){me=!0;delete Qc.eventModel;var b=le.shift();if(ra(b))try{b.call(Tc)}catch(ye){}else if(ua(b)){var c=b;if(sa(c[0])){var d=c[0].split("."),e=d.pop(),f=c.slice(1),h=Sc(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,f)}catch(ye){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||
Object.prototype.hasOwnProperty.call(k,"callee"))){a:{if(b.length&&sa(b[0])){var l=he[b[0]];if(l){b=l(b);break a}}b=void 0}if(!b){me=!1;continue}}var m;var n=void 0,p=b,q=p._clear;for(n in p)p.hasOwnProperty(n)&&"_clear"!==n&&(q&&Yc(n,void 0),Yc(n,p[n]));var r=p.event;if(r){var u=p["gtm.uniqueEventId"];u||(u=Oc(),p["gtm.uniqueEventId"]=u,Yc("gtm.uniqueEventId",u));Jc=r;var t;var A,D,C=p,M=C.event,F=C["gtm.uniqueEventId"],G=Ic.zones;D=G?G.checkState(Hc.o,F):gd;if(D.active){var J=ne(C);c:{var I=D.isWhitelisted;
if("gtm.js"==M){if(Ud){A=!1;break c}Ud=!0}var K=F,R=M;if(wd&&!Ed[K]&&Cd!==K){Jd();Cd=K;Bd="";var ja=Dd,W=K,aa,L=R;aa=0===L.indexOf("gtm.")?encodeURIComponent(L):"*";ja[W]="&e="+aa+"&eid="+K;Fd||(Fd=z.setTimeout(Jd,500))}var S=cd(I),O={id:F,name:M,callback:J||qa,Z:S,Ea:[]};O.Ea=Ec(S);for(var za,Za=O,Sb=Sd(Za.callback),vc=[],xb=[],ib=0;ib<oc.length;ib++)if(Za.Ea[ib]){var Fg=oc[ib];var Tb=Sb.add();try{var ze=Ld(ib,vc,Tb,Tb,Tb,Za);ze?xb.push(ze):(Td(ib,Za),Tb())}catch(ye){Tb()}}Sb.$c();for(var od=0;od<xb.length;od++)xb[od]();za=0<xb.length;if("gtm.js"===M||"gtm.sync"===M)d:{}if(za){for(var Gg={__cl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},wc=0;wc<O.Ea.length;wc++)if(O.Ea[wc]){var Be=oc[wc];if(Be&&!Gg[Be[P.P]]){A=!0;break c}}A=!1}else A=za}t=A?!0:!1}else t=!1;Jc=null;m=t}else m=!1;a=m||a}me=!1}return!a},pe=function(){var a=oe();try{var b=z["dataLayer"].hide;if(b&&void 0!==b[Hc.o]&&b.end){b[Hc.o]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&!0===
b[d]){c=!1;break}c&&(b.end(),b.end=null)}}catch(e){}return a},qe=function(){var a=cb("dataLayer",[]),b=cb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};jd.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});je.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(le.push.apply(le,b);300<this.length;)this.shift();return oe()};le.push.apply(le,a.slice(0));H(pe)};var re={};re.Ja=new String("undefined");re.cb={};var se=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===re.Ja?b:a[d]);return c.join("")}};se.prototype.toString=function(){return this.resolve("undefined")};se.prototype.valueOf=se.prototype.toString;re.td=function(a){return new se(a)};var te={};re.ze=function(a,b){var c=Oc();te[c]=[a,b];return c};re.Yb=function(a){var b=a?0:1;return function(a){var c=te[a];if(c&&"function"===typeof c[b])c[b]();te[a]=void 0}};
re.Zd=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};re.qe=function(a){if(a===re.Ja)return a;var b=Oc();re.cb[b]=a;return'google_tag_manager["'+Hc.o+'"].macro('+b+")"};re.Qc=se;var ue=new Da,ve=function(a,b){function c(a){var b=N(a),c=rb(b,"protocol"),d=rb(b,"host",!0),e=rb(b,"port"),f=rb(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,f]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0};
function we(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var f=0;f<e.length;f++)if(b[e[f]]){d=b[e[f]](c);break a}}catch(u){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=va(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,r=ue.get(q);r||(r=new RegExp(c,p),ue.set(q,r));n=r.test(b)}catch(u){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ve(b,c)}return!1};var xe=function(){return!1};function Ce(a,b,c,d){return(d||"https:"==z.location.protocol?a:b)+c}function De(a,b){for(var c=b||(a instanceof v?new v:new Ka),d=a.U(),e=0;e<d.length();e++){var f=d.get(e);if(a.has(f)){var h=a.get(f);h instanceof v?(c.get(f)instanceof v||c.set(f,new v),De(h,c.get(f))):h instanceof Ka?(c.get(f)instanceof Ka||c.set(f,new Ka),De(h,c.get(f))):c.set(f,h)}}return c}function Ee(){return Hc.o}function Fe(){return(new Date).getTime()}function Ge(a,b){return Ra(Sc(a,b||2))}function He(){return Jc}
function Ie(a){return mb('<a href="'+a+'"></a>')[0].href}function Je(a){return ya(Qa(a))}function Ke(a){return null===a?"null":void 0===a?"undefined":a.toString()}function Le(a,b){return xa(a,b)}function Me(a,b,c){if(!(a instanceof v))return null;for(var d=new Ka,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof Ka&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var Ne=function(){var a=new ab,b=tb();xe()&&(b.loadJavaScript=qa,b.loadIframe=qa);a.addAll(b);a.addAll({buildSafeUrl:Ce,copy:De,copyFromDataLayer:Ge,decodeHtmlUrl:Ie,generateRandom:Le,generateUniqueNumber:Oc,getContainerId:Ee,getCurrentTime:Fe,getEventName:He,makeInteger:Je,makeString:Ke,tableToMap:Me});return function(b){return a.get(b)}},Pe=function(){var a={networkAccess:Oe};return function(b,c,d){return a[b]?a[b](c,d):qa}};
function Oe(a,b){var c=a.url_list||[];return function(a,e){if(c.length){for(var d=0;d<c.length;d++)if(c[d]===e)return;throw b({permissionId:a,debugString:"\nURL = "+e});}}};var Qe,Se=function(){var a=data.runtime||[],b=data.permissions||{};Qe=new vb;kc=function(a,b){var c=new Ka,d;for(d in b)b.hasOwnProperty(d)&&c.set(d,Ra(b[d]));var e=Qe.S([a,c]);e instanceof g&&"return"===e.B&&(e=e.getData());return Qa(e)};rc=we;ub(Qe,Ne());for(var c=0;c<a.length;c++){var d=a[c];if(!ua(d)||3>d.length){if(0==d.length)continue;return}Qe.S(d)}var e=function(a){throw Re({permissionId:a,debugString:"The requested permission does not exist."});};Qe.qa(e);var f=Pe(),h;for(h in b)if(b.hasOwnProperty(h)){var k=
b[h],l=!1,m;for(m in k)if(k.hasOwnProperty(m)){l=!0;var n=f(m,k[m],Re);Qe.Oa(h,m,n)}l||Qe.Oa(h,"default",e)}};function Re(a){return new ed(a)};var Te=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Ue=function(a){return encodeURIComponent(a)},Ve=function(a,b){if(!a)return!1;var c=rb(N(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Q=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null},We=function(a,b){Pa(a,b)},Xe=function(a){return ya(a)},Ye=function(a,b){return va(a,b)};var Ze=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||jb(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},$e=function(a){Ic.hasOwnProperty("autoEventsSettings")||(Ic.autoEventsSettings={});var b=Ic.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},af=function(a,b,c,d){var e=$e(a),f=Ea(e,b,d);e[b]=
c(f)},bf=function(a,b,c){var d=$e(a);return Ea(d,b,c)};var cf=!1;if(B.querySelectorAll)try{var df=B.querySelectorAll(":root");df&&1==df.length&&df[0]==B.documentElement&&(cf=!0)}catch(a){}var ef=cf;var ff=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&!0===c&&(l=decodeURIComponent(l));d.push(l)}}return d},jf=function(a,b,c,d){var e=gf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=hf(e,function(a){return a.Bd},b);if(1===e.length)return e[0].id;e=hf(e,function(a){return a.oe},c);return e[0]?e[0].id:void 0}},mf=function(a,b,
c,d,e,f){c=void 0===c?"/":c;var h=d=void 0===d?"auto":d,k=c;if(kf.test(document.location.hostname)||"/"===k&&lf.test(h))return!1;f&&(b=encodeURIComponent(b));var l=b;l&&1200<l.length&&(l=l.substring(0,1200));b=l;var m=a+"="+b+"; path="+c+"; ";void 0!==e&&(m+="expires="+e.toGMTString()+"; ");if("auto"===d){var n=!1,p;a:{var q=[],r=document.location.hostname.split(".");if(4===r.length){var u=r[r.length-1];if(parseInt(u,10).toString()===u){p=["none"];break a}}for(var t=r.length-2;0<=t;t--)q.push(r.slice(t).join("."));
q.push("none");p=q}for(var A=p,D=0;D<A.length&&!n;D++)n=mf(a,b,c,A[D],e);return n}d&&"none"!==d&&(m+="domain="+d+";");var C=document.cookie;document.cookie=m;return C!=document.cookie||0<=ff(a).indexOf(b)};function hf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}
function gf(a,b){for(var c=[],d=ff(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Bd:1*k[0]||1,oe:1*k[1]||1}))}}return c}var lf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,kf=/(^|\.)doubleclick\.net$/i;var nf=window,of=document;var pf=function(){for(var a=nf.navigator.userAgent+(of.cookie||"")+(of.referrer||""),b=a.length,c=nf.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Date.now()/1E3)].join(".")},sf=function(a,b,c,d){var e=qf(b);return jf(a,e,rf(c),d)};
function qf(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length}function rf(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1}function tf(a,b){var c=""+qf(a),d=rf(b);1<d&&(c+="-"+d);return c};var uf=["1"],vf={},zf=function(a,b,c){b=b||"auto";c=c||"/";var d=wf(a);vf[d]||xf(d,b,c)||(yf(d,pf(),b,c),xf(d,b,c))};function yf(a,b,c,d){var e;e=["1",tf(c,d),b].join(".");mf(a,e,d,c,new Date(Ca().getTime()+7776E6))}function xf(a,b,c){var d=sf(a,b,c,uf);d&&(vf[a]=d);return d}function wf(a){return(a||"_gcl")+"_au"};function Af(){for(var a=Bf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Cf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Bf,Df,Ef=function(a){Bf=Bf||Cf();Df=Df||Af();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Bf[l],Bf[m],Bf[n],Bf[p])}return b.join("")},Ff=function(a){function b(b){for(;d<a.length;){var c=a.charAt(d++),e=Df[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}Bf=Bf||Cf();Df=Df||
Af();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Gf;function Hf(a,b){if(!a||b===B.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var If=function(){var a=cb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Jf=/(.*?)\*(.*?)\*(.*)/,Kf=/([^?#]+)(\?[^#]*)?(#.*)?/,Lf=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Nf=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ef(String(d))))}var e=b.join("*");return["1",Mf(e),e].join("*")},Mf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:
b),a].join("*"),d;if(!(d=Gf)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Gf=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Gf[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Pf=function(){return function(a){var b=N(z.location.href),c=b.search.replace("?",""),d=qb(c,"_gl",!0)||"";a.query=Of(d)||{};var e=rb(b,"fragment").match(Lf);a.fragment=Of(e&&e[3]||"")||{}}},Of=function(a){var b;b=void 0===b?3:b;try{if(a){var c=Jf.exec(a);if(c&&
"1"===c[1]){var d=c[3],e;a:{for(var f=c[2],h=0;h<b;++h)if(f===Mf(d,h)){e=!0;break a}e=!1}if(e){for(var k={},l=d?d.split("*"):[],m=0;m<l.length;m+=2)k[l[m]]=Ff(l[m+1]);return k}}}}catch(n){}};
function Qf(a,b,c){function d(a){var b=a,c=Lf.exec(b),d=b;if(c){var e=c[2],f=c[4];d=c[1];f&&(d=d+e+f)}a=d;var h=a.charAt(a.length-1);a&&"&"!==h&&(a+="&");return a+l}c=void 0===c?!1:c;var e=Kf.exec(b);if(!e)return"";var f=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+f+h+k}
function Rf(a,b,c){for(var d={},e={},f=If().decorators,h=0;h<f.length;++h){var k=f[h];(!c||k.forms)&&Hf(k.domains,b)&&(k.fragment?Ga(e,k.callback()):Ga(d,k.callback()))}if(Ha(d)){var l=Nf(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,q=0;q<n.length;q++){var r=n[q];if("_gl"===r.name){r.setAttribute("value",l);p=!0;break}}if(!p){var u=B.createElement("input");u.setAttribute("type","hidden");u.setAttribute("name","_gl");u.setAttribute("value",
l);a.appendChild(u)}}else if("post"===m){var t=Qf(l,a.action);ob.test(t)&&(a.action=t)}}}else Sf(l,a,!1)}if(!c&&Ha(e)){var A=Nf(e);Sf(A,a,!0)}}function Sf(a,b,c){if(b.href){var d=Qf(a,b.href,void 0===c?!1:c);ob.test(d)&&(b.href=d)}}
var Tf=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Rf(e,e.hostname,!1)}}catch(h){}},Uf=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=rb(N(b.action),"host");Rf(b,c,!0)}}catch(d){}},Vf=function(a,b,c,d){var e=If();e.init||(gb(B,"mousedown",Tf),gb(B,"keyup",Tf),gb(B,"submit",Uf),e.init=!0);var f={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};If().decorators.push(f)};var Wf=/^\w+$/,Xf=/^[\w-]+$/,Yf=/^~?[\w-]+$/,Zf={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"},ag=function(a){var b=ff(a,B.cookie),c=[];if(!b||0==b.length)return c;for(var d=0;d<b.length;d++){var e=b[d].split(".");3==e.length&&"GCL"==e[0]&&e[1]&&c.push(e[2])}return $f(c)};function bg(a){return a&&"string"==typeof a&&a.match(Wf)?a:"_gcl"}
var cg=function(a){if(a){if("string"==typeof a){var b=bg(a);return{dc:b,aw:b,gf:b,ha:b}}if(a&&"object"==typeof a)return{dc:bg(a.dc),aw:bg(a.aw),gf:bg(a.gf),ha:bg(a.ha)}}return{dc:"_gcl",aw:"_gcl",gf:"_gcl",ha:"_gcl"}},dg=function(){var a=N(z.location.href),b=rb(a,"query",!1,void 0,"gclid"),c=rb(a,"query",!1,void 0,"gclsrc");if(!b||!c){var d=a.hash.replace("#","");b=b||qb(d,"gclid");c=c||qb(d,"gclsrc")}return void 0!==b&&b.match(Xf)?{O:b,D:c}:null},eg=function(a){var b=a.split(".");return 3!==b.length||
"GCL"!==b[0]?0:1E3*(Number(b[1])||0)},fg=function(a,b,c,d,e){if(ua(b)){var f=cg(e);Vf(function(){for(var b={},c=0;c<a.length;++c){var d=a[c],e=f[d],n=Zf[d];if(e&&n){var p=e+n,q=ff(p,B.cookie);q.length&&(b[p]=q.sort()[q.length-1])}}return b},b,c,d)}},$f=function(a){return a.filter(function(a){return Yf.test(a)})};var gg=/^\d+\.fls\.doubleclick\.net$/;function hg(a){var b=N(z.location.href),c=rb(b,"host",!1);if(c&&c.match(gg)){var d=rb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
var ig=function(a){var b=hg("gclaw");if(b)return b.split(".");var c=cg(a);if("_gcl"==c.aw){var d=dg();if(d&&(null==d.D||"aw.ds"==d.D))return[d.O]}return ag(c.aw+"_aw")},jg=function(a){var b=hg("gcldc");if(b)return b.split(".");var c=cg(a);if("_gcl"==c.dc){var d=dg();if(d&&("ds"==d.D||"aw.ds"==d.D))return[d.O]}return ag(c.dc+"_dc")},kg=function(a){var b=cg(a);if("_gcl"==b.ha){var c=dg();if(c&&"ha"==c.D)return[c.O]}return ag(b.ha+"_ha")},lg=function(){var a=hg("gac");if(a)return decodeURIComponent(a);
for(var b=[],c=B.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Cb:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].Cb]||(h[b[k].Cb]=[]),h[b[k].Cb].push({timestamp:l[1],O:l[2]}))}var m=[],n;for(n in h)if(h.hasOwnProperty(n)){for(var p=[],q=h[n],r=0;r<q.length;r++)p.push(q[r].O);p=$f(p);p.length&&m.push(n+":"+p.join(","))}return m.join(";")},mg=function(a,
b,c){zf(a,b,c);var d=vf[wf(a)],e=dg()||{},f=e.O,h=e.D;if(d&&f&&("aw.ds"===h||"ds"===h)){var k=Ic.joined_au=Ic.joined_au||{},l=a||"_gcl";if(!k[l]){nb("https://adservice.google.com/ddm/regclk"+("?gclid="+f+"&auiddc="+d));var m=wf(a);vf[m]&&yf(m,vf[m],b||"auto",c||"/");k[l]=!0}}};var ng;a:{ng="G"}var og={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GTM:ng},pg=function(a){var b=Hc.o.split("-"),c=b[0].toUpperCase();return(og[c]||"i")+"9o"+(a&&"GTM"===c?b[1]:"")};var wg=!!z.MutationObserver,xg=void 0,yg=function(a){if(!xg){var b=function(){var a=B.body;if(a)if(wg)(new MutationObserver(function(){for(var a=0;a<xg.length;a++)H(xg[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;gb(a,"DOMNodeInserted",function(){b||(b=!0,H(function(){b=!1;for(var a=0;a<xg.length;a++)H(xg[a])}))})}};xg=[];B.body?b():H(b)}xg.push(a)};var Kg="www.googletagmanager.com/gtm.js";
var Lg=Kg,Mg=function(a,b,c,d){gb(a,b,c,d)},Ng=function(a,b){return z.setTimeout(a,b)},T=function(a,b,c){if(xe()){b&&H(b)}else return eb(a,b,c)},Og=function(){return z.location.href},Pg=function(a){return rb(N(a),"fragment")},Qg=function(a,b,c,d,e){return rb(a,b,c,d,e)},U=function(a,b){return Sc(a,b||2)},Rg=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return z["dataLayer"].push(a)},Sg=function(a,
b){z[a]=b},V=function(a,b,c){b&&(void 0===z[a]||c&&!z[a])&&(z[a]=b);return z[a]},Tg=function(a,b,c){return ff(a,b,void 0===c?!0:!!c)},Ug=function(a,b,c){var d={prefix:a,path:b,domain:c};d=d||{};var e=cg(d.prefix),f=d.domain||"auto",h=d.path||"/",k=dg();if(null!=k){var l=(new Date).getTime(),m=new Date(l+7776E6),n=Math.round(l/1E3),p=["GCL",n,k.O].join("."),q;q=!0===d.uf?["GCL",n,"~"+k.O].join("."):p;k.D&&"aw.ds"!=k.D||mf(e.aw+"_aw",q,h,f,m,!0);"aw.ds"!=k.D&&"ds"!=k.D||mf(e.dc+"_dc",p,h,f,m,!0);"gf"==
k.D&&mf(e.gf+"_gf",p,h,f,m,!0);"ha"==k.D&&mf(e.ha+"_ha",p,h,f,m,!0)}},Vg=function(a,b,c,d){var e=Pf(),f=If();f.data||(f.data={query:{},fragment:{}},e(f.data));var h={},k=f.data;k&&(Ga(h,k.query),Ga(h,k.fragment));for(var l=cg(b),m=0;m<a.length;++m){var n=a[m],p=Zf[n];if(void 0!==p){var q=l[n]+p,r=h[q];if(r){var u=Math.min(eg(r),(new Date).getTime()),t;b:{for(var A=u,D=ff(q,B.cookie),C=0;C<D.length;++C)if(eg(D[C])>A){t=!0;break b}t=!1}t||mf(q,r,c,d,new Date(u+
7776E6),!0)}}}},Wg=function(a,b,c,d,e){fg(a,b,c,d,e);},Xg=function(a,b){var c;a:{var d;d=100;for(var e={},f=0;f<b.length;f++)e[b[f]]=!0;for(var h=a,k=0;h&&k<=d;k++){if(e[String(h.tagName).toLowerCase()]){c=h;break a}h=h.parentElement}c=null}return c},X=function(a,b,c,d){var e=!d&&"http:"==z.location.protocol;e&&(e=2!==Yg());return(e?b:a)+c},Zg=function(a,b){if(xe()){b&&H(b)}else fb(a,b)};
var $g=function(a){var b=0;return b},ah=function(a){},bh=function(a){var b=!1;return b},ch=function(a,b){var c;a:{if(a&&
ua(a))for(var d=0;d<a.length;d++)if(a[d]&&b(a[d])){c=a[d];break a}c=void 0}return c},dh=function(a,b,c,d){af(a,b,c,d)},eh=function(a,b,c){return bf(a,b,c)},fh=function(a){return!!bf(a,"init",!1)},gh=function(a){$e(a).init=!0};
var Yg=function(){var a=Lg;if(Nc){if(0===Nc.toLowerCase().indexOf("https://"))return 2;if(0===Nc.toLowerCase().indexOf("http://"))return 3}a=a.toLowerCase();for(var b="https://"+a,c="http://"+a,d=1,e=B.getElementsByTagName("script"),f=0;f<e.length&&100>f;f++){var h=e[f].src;if(h){h=h.toLowerCase();if(0===h.indexOf(c))return 3;1===d&&0===h.indexOf(b)&&(d=2)}}return d};var jh=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Lg;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";if(b)for(var e in b)b[e]&&b.hasOwnProperty(e)&&(d+="&"+e+"="+encodeURIComponent(b[e]));T(X("https://","http://",d))};var lh=function(a,b,c){a instanceof re.Qc&&(a=a.resolve(re.ze(b,c)),b=qa);return{mb:a,V:b}};var yh=function(a,b,c){this.n=a;this.t=b;this.p=c},zh=function(){this.c=1;this.e=[];this.p=null};function Ah(a){var b=Ic,c=b.gss=b.gss||{};return c[a]=c[a]||new zh}var Bh=function(a,b){Ah(a).p=b},Ch=function(a,b,c){var d=Math.floor(Ca().getTime()/1E3);Ah(a).e.push(new yh(b,d,c))},Dh=function(a){};var Mh=window,Nh=document,Oh=function(a){var b=Mh._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Mh["ga-disable-"+a])return!0;try{var c=Mh.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=ff("AMP_TOKEN",Nh.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return!1};var Th=function(a){if(1===Ah(a).c){Ah(a).c=2;var b=encodeURIComponent(a);eb(("http:"!=z.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Uh=function(a,b){};var Z={a:{}};
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0})(function(a){var b=a.vtp_gtmOnFailure;T("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=V("google_trackConversion");if(ra(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=Q(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&(e.value=a.vtp_eventValue),
a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:pg(void 0)})||b()}else b()},b)})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0})(function(a){return a.vtp_value})}();
Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=ef?B.querySelectorAll(a.vtp_elementSelector):null;e&&0<e.length&&(b=e[0])}else b=kb(a.vtp_elementId);b&&(c=d?jb(b,d):lb(b));var f=String(b&&c);return f?f.replace(/^\s+|\s+$/g,""):""})}();Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0})(function(){return Jc})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0})(function(a){var b=U("gtm.referrer",1)||B.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Qg(N(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):sb(N(String(b))):String(b)})}();
Z.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=Ze(b);d.event="gtm.click";Rg(d)}}(function(a){Z.__cl=a;Z.__cl.b="cl";Z.__cl.g=!0})(function(b){if(!fh("cl")){var c=V("document");gb(c,"click",a,!0);gh("cl");var d=bf("cl","legacyTeardown",void 0);d&&d()}H(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0})(function(a){for(var b=String(a.vtp_name).split("."),c=V(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0})(function(a){return xa(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.b="u";Z.__u.g=!0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:U("gtm.url",1))||Og();var d=b[a("vtp_component")];return d&&"URL"!=d?Qg(N(String(c)),d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0):sb(N(String(c)))})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=U(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(a){return function(){if(a.rb&&a.sb>=a.rb)a.nb&&V("self").clearInterval(a.nb);else{a.sb++;var b=(new Date).getTime();Rg({event:a.N,"gtm.timerId":a.nb,"gtm.timerEventNumber":a.sb,"gtm.timerInterval":a.interval,"gtm.timerLimit":a.rb,"gtm.timerStartTime":a.Jc,"gtm.timerCurrentTime":b,"gtm.timerElapsedTime":b-a.Jc,"gtm.triggers":a.Ne})}}}(function(a){Z.__tl=a;Z.__tl.b="tl";Z.__tl.g=!0})(function(b){H(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c={N:b.vtp_eventName,
sb:0,interval:Number(b.vtp_interval),rb:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Ne:String(b.vtp_uniqueTriggerId||"0"),Jc:(new Date).getTime()};c.nb=V("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.ua=["google"],function(){var a,b=function(b){var c={},e={},f={},h={},k={};if(b.vtp_gaSettings){var l=b.vtp_gaSettings;We(Q(l.vtp_fieldsToSet,"fieldName","value"),e);We(Q(l.vtp_contentGroup,"index","group"),f);We(Q(l.vtp_dimension,"index","dimension"),h);We(Q(l.vtp_metric,"index","metric"),k);b.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=Pa(l,void 0);b=Pa(b,m)}We(Q(b.vtp_fieldsToSet,"fieldName","value"),e);We(Q(b.vtp_contentGroup,
"index","group"),f);We(Q(b.vtp_dimension,"index","dimension"),h);We(Q(b.vtp_metric,"index","metric"),k);var n=qd(b.vtp_functionName),p="",q="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(q=b.vtp_trackerName,p=q+"."):(q="gtm"+Oc(),p=q+".");var r={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0},u={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},t=function(a){var b=[].slice.call(arguments,0);b[0]=p+b[0];n.apply(window,b)},A=function(a,b){return void 0===b?b:a(b)},D=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&t("set",a+c,b[c])},C=function(){},M=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&r[e]||!c&&void 0===r[e])){var f=u[e]?Aa(a[e]):a[e];"anonymizeIp"!=e||f||(f=void 0);b[e]=f;d++}return d},F={name:q};M(e,F,
!0);n("create",b.vtp_trackingId||c.trackingId,F);t("set","&gtm",pg(!0));(function(a,c){void 0!==b[c]&&t("set",a,b[c])})("nonInteraction","vtp_nonInteraction");D("contentGroup",f);D("dimension",h);D("metric",k);var G={};M(e,G,!1)&&t("set",G);var J;b.vtp_enableLinkId&&t("require","linkid","linkid.js");t("set","hitCallback",function(){var a=
e&&e.hitCallback;ra(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(t("require","ec","ec.js"),C());var I={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:A(String,b.vtp_eventLabel||c.label),eventValue:A(Xe,b.vtp_eventValue||c.value)};M(J,I,!1);t("send",I);}else if("TRACK_SOCIAL"==
b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==
b.vtp_trackType){}else{b.vtp_enableEcommerce&&(t("require","ec","ec.js"),C());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var S="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");t("require","displayfeatures",void 0,{cookieName:S})}"DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType&&
(S="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,""),t("require","adfeatures",{cookieName:S}));J?t("send","pageview",J):t("send","pageview");b.vtp_autoLinkDomains&&rd(p,b.vtp_autoLinkDomains,!!b.vtp_useHashAutoLink,!!b.vtp_decorateFormsAutoLink);}if(!a){var O=b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&
(O="internal/"+O);a=!0;T(X("https:","http:","//www.google-analytics.com/"+O,e&&e.forceSSL),function(){var a=pd();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}};Z.__ua=b;Z.__ua.b="ua";Z.__ua.g=!0}();



Z.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},f=function(a){var b=U(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue},h=function(a,
b){if(!a)return!1;var c=l(Og()),d;d=ua(b.vtp_affiliatedDomains)?b.vtp_affiliatedDomains:String(b.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",");for(var e=[c],f=0;f<d.length;f++)if(d[f]instanceof RegExp){if(d[f].test(a))return!1}else{var h=d[f];if(0!=h.length){if(0<=l(a).indexOf(h))return!1;e.push(l(h))}}return!Ve(a,e)},k=/^https?:\/\//i,l=function(a){k.test(a)||(a="http://"+a);return Qg(N(a),"HOST",!0)};(function(a){Z.__aev=a;Z.__aev.b="aev";Z.__aev.g=!0})(function(e){switch(e.vtp_varType){case "TAG_NAME":return U("gtm.element",
1).tagName||e.vtp_defaultValue;case "TEXT":var k,l=U("gtm.element",1),m=U("event",1),r=Number(new Date);a===l&&b===m&&c>r-250?k=d:(d=k=l?lb(l):"",a=l,b=m);c=r;return k||e.vtp_defaultValue;case "URL":var u;a:{var t=String(U("gtm.elementUrl",1)||e.vtp_defaultValue||""),A=N(t);switch(e.vtp_component||"URL"){case "URL":u=t;break a;case "IS_OUTBOUND":u=h(t,e);break a;default:u=rb(A,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey)}}return u;case "ATTRIBUTE":var D;if(void 0===e.vtp_attribute)D=
f(e);else{var C=U("gtm.element",1);D=jb(C,e.vtp_attribute)||e.vtp_defaultValue||""}return D;default:return f(e)}})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=V("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(c){var d={google_conversion_domain:"",google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,google_conversion_value:c.vtp_conversionValue||
0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:pg(void 0)},h=function(a){return function(b,e,f){var h="DATA_LAYER"==a?U(f):c[e];h&&(d[b]=h)}},k=h("JSON");k("google_conversion_currency","vtp_currencyCode");k("google_conversion_order_id","vtp_orderId");c.vtp_enableProductReporting&&(k=h(c.vtp_productReportingDataSource),k("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),k("google_basket_feed_country","vtp_awFeedCountry",
"aw_feed_country"),k("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),k("google_basket_discount","vtp_discount","discount"),k("google_conversion_items","vtp_items","items"),d.google_conversion_items=d.google_conversion_items.map(function(a){return"("+[a.price,a.quantity,a.id].join("*")+")"}).join(""));c.vtp_allowReadGaCookie&&(d.google_read_ga_cookie_opt_in=!0);!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?(c.vtp_conversionCookiePrefix&&(d.google_gcl_cookie_prefix=
c.vtp_conversionCookiePrefix),d.google_read_gcl_cookie_opt_out=!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,T("//www.googleadservices.com/pagead/conversion_async.js",f(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0}();
Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0})(function(a){var b=a.vtp_input,c=Q(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0})(function(a){H(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){var a=function(b,c,f,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,f,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=B.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,db(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];d.firstChild;)p.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,p,e,h)()}else b.insertBefore(d,null),e()}else f()}catch(q){H(h)}}};var b=function(a,b,c){md(function(){var d,e=Ic;e.postscribe||(e.postscribe=Gc);d=e.postscribe;var f={done:b},m=B.createElement("div");m.style.display="none";m.style.visibility="hidden";B.body.appendChild(m);try{d(m,a,f)}catch(n){H(c)}})};var c=function(d){if(B.body){var e=
d.vtp_gtmOnFailure,f=lh(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.mb,k=f.V;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(B.body,mb(h),k,e)()}else Ng(function(){c(d)},200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0}();



Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.b="img";Z.__img.g=!0})(function(a){var b=mb('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}E(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.a.lcl=[],function(){function a(){var a=V("document"),d=0,e=function(c){var e=c.target;if(e&&3!==c.which&&(!c.timeStamp||c.timeStamp!==d)){d=c.timeStamp;e=Xg(e,["a","area"]);if(!e)return c.returnValue;var f=c.defaultPrevented||!1===c.returnValue,l=bf("lcl",f?"nv.mwt":"mwt",0),m=Ze(e);m.event="gtm.linkClick";if(f){var n=eh("lcl","nv.ids",[]).join(",");if(n)m["gtm.triggers"]=n;else return}else{var p=eh("lcl","ids",[]).join(",");m["gtm.triggers"]=p}if(b(c,e,a)&&!f&&l&&e.href){var q=V((e.target||"_self").substring(1)),
r=!0;if(Rg(m,function(){r&&q&&(q.location.href=e.href)},l))r=!1;else return c.preventDefault&&c.preventDefault(),c.returnValue=!1}else Rg(m,function(){},l||2E3);return!0}};gb(a,"click",e,!1);gb(a,"auxclick",e,!1)}function b(a,b,e){if(2===a.which||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)return!1;var c=b.href.indexOf("#"),d=b.target;if(d&&"_self"!==d&&"_parent"!==d&&"_top"!==d||0===c)return!1;if(0<c){var k=sb(N(b.href)),l=sb(N(e.location));return k!==l}return!0}(function(a){Z.__lcl=a;Z.__lcl.b="lcl";
Z.__lcl.g=!0})(function(b){var c=void 0===b.vtp_waitForTags?!0:b.vtp_waitForTags,e=void 0===b.vtp_checkValidation?!0:b.vtp_checkValidation,f=Number(b.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;var h=b.vtp_uniqueTriggerId||"0";if(c){var k=function(a){return Math.max(f,a)};af("lcl","mwt",k,0);e||af("lcl","nv.mwt",k,0)}var l=function(a){a.push(h);return a};dh("lcl","ids",l,[]);e||dh("lcl","nv.ids",l,[]);if(!fh("lcl")){a();gh("lcl");var m=bf("lcl","legacyTeardown",void 0);m&&m()}H(b.vtp_gtmOnSuccess)})}();


var Vh={macro:function(a){if(re.cb.hasOwnProperty(a))return re.cb[a]}};Vh.dataLayer=Tc;Vh.onHtmlSuccess=re.Yb(!0);Vh.onHtmlFailure=re.Yb(!1);Vh.callback=function(a){Lc.hasOwnProperty(a)&&ra(Lc[a])&&Lc[a]();delete Lc[a]};Vh.ed=function(){Ic[Hc.o]=Vh;Mc=Z.a;sc=sc||re;tc=dd};
Vh.Vd=function(){Ic=z.google_tag_manager=z.google_tag_manager||{};if(Ic[Hc.o]){var a=Ic.zones;a&&a.unregisterChild(Hc.o)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)lc.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)oc.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)nc.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},q=0;q<n.length;q++)p[n[q][0]]=Array.prototype.slice.call(n[q],1);mc.push(p)}qc=Z;Se();Vh.ed();qe();hd=!1;id=0;if("interactive"==
B.readyState&&!B.createEventObject||"complete"==B.readyState)kd();else{gb(B,"DOMContentLoaded",kd);gb(B,"readystatechange",kd);if(B.createEventObject&&B.documentElement.doScroll){var r=!0;try{r=!z.frameElement}catch(t){}r&&ld()}gb(z,"load",kd)}ie=!1;"complete"===B.readyState?ke():gb(z,"load",ke);a:{
if(!wd)break a;zd();Cd=void 0;Dd={};Ad={};Fd=void 0;Ed={};Bd="";Gd=xd();z.setInterval(zd,864E5);}}};Vh.Vd();

})()
