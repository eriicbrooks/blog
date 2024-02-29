const BLOG = {
  NOTION_PAGE_ID:
        process.env.NOTION_PAGE_ID || '4574642305a949c38a8195c5eca6a666',
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // ä¼ªéæè·¯å¾ï¼å¼å¯åæææç« URLé½ä»¥ .html ç»å°¾ã
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5, // æ´æ°åå®¹ç¼å­é´é åä½(ç§)ï¼å³æ¯ä¸ªé¡µé¢æ5ç§ççº¯éææãæ­¤æé´æ è®ºå¤å°æ¬¡è®¿é®é½ä¸ä¼æånotionæ°æ®ï¼è°å¤§è¯¥å¼æå©äºèçVercelèµæºãåæ¶æåè®¿é®éçï¼ä½ä¹ä¼ä½¿æç« æ´æ°æå»¶è¿ã
  THEME: process.env.NEXT_PUBLIC_THEME || 'next', // example,fukasawa,gitbook,heo,hexo,landing,matery,medium,next,nobelium,plog,simple
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // true or false
  LANG: process.env.NEXT_PUBLIC_LANG || 'en-US', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: process.env.NEXT_SINCE || 2023, // e.g if leave this empty, current year will be used.
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'auto', // ['light', 'dark', 'auto'], // light æ¥é´æ¨¡å¼ ï¼ darkå¤é´æ¨¡å¼ï¼ autoæ ¹æ®æ¶é´åä¸»é¢èªå¨å¤é´æ¨¡å¼
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // å¤é´æ¨¡å¼èµ·è³æ¶é´ï¼falseæ¶å³é­æ ¹æ®æ¶é´èªå¨åæ¢å¤é´æ¨¡å¼

  // 3.14.1çæ¬åï¼æ¬¢è¿è¯­å¨æ­¤éç½®ï¼è±æéå·éå¼ ,  å³å¯æ¯æå¤ä¸ªæ¬¢è¿è¯­æå­ææãä¸ä¸ªæ®éçå¹²é¥­äººð
  GREETING_WORDS: process.env.NEXT_PUBLIC_GREETING_WORDS || 'hello',

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, 

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'eric b.', // æ¨çæµç§° ä¾å¦ tangly1024
  BIO: process.env.NEXT_PUBLIC_BIO || '', // ä½èç®ä»
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://ericbrooks.io', // ç½ç«å°å
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion, Blog', // ç½ç«å³é®è¯ è±æéå·éå¼

  // ç¤¾äº¤é¾æ¥ï¼ä¸éè¦å¯çç©ºç½ï¼ä¾å¦ CONTACT_WEIBO:''
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'ennuigo2@gmail.com', // é®ç®±å°å ä¾å¦mail@tangly1024.com
  CONTACT_WEIBO: process.env.NEXT_PUBLIC_CONTACT_WEIBO || '', // ä½ çå¾®åä¸ªäººä¸»é¡µ
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || '', // ä½ çtwitterä¸ªäººä¸»é¡µ
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || 'https://github.com/eriicbrooks/blog', // ä½ çgithubä¸ªäººä¸»é¡µ ä¾å¦ https://github.com/tangly1024
  CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || '', // ä½ çtelegram å°å ä¾å¦ https://t.me/tangly_1024
  CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '', // ä½ çlinkedIn é¦é¡µ
  CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || '', // æ¨çinstagramå°å
  CONTACT_BILIBILI: process.env.NEXT_PUBLIC_CONTACT_BILIBILI || '', // Bç«ä¸»é¡µ
  CONTACT_YOUTUBE: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || '', // Youtubeä¸»é¡µ

  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so', // Notionååï¼æ¨å¯ä»¥éæ©ç¨èªå·±çååè¿è¡ååä»£çï¼å¦æä¸æå¾ä»ä¹æ¯ååä»£çï¼è¯·å¿ä¿®æ¹æ­¤é¡¹

  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // blog favicon éç½®, é»è®¤ä½¿ç¨ /public/favicon.icoï¼æ¯æå¨çº¿å¾çï¼å¦ https://img.imesong.com/favicon.png

  RANDOM_IMAGE_URL: process.env.NEXT_PUBLIC_RANDOM_IMAGE_URL || '', // éæºå¾çAPI,å¦ææªéç½®ä¸é¢çå³é®å­ï¼ä¸»é¡µå°é¢ï¼å¤´åï¼æç« å°é¢å¾é½ä¼è¢«æ¿æ¢ä¸ºéæºå¾ç
  RANDOM_IMAGE_REPLACE_TEXT: process.env.NEXT_PUBLIC_RANDOM_IMAGE_NOT_REPLACE_TEXT || 'images.unsplash.com', // è§¦åæ¿æ¢å¾çç url å³é®å­(å¤ä¸ªæ¯æç¨è±æéå·åå¼)ï¼åªæå¾çå°åä¸­åå«æ­¤å³é®å­æä¼æ¿æ¢ä¸ºä¸æ¹éæºå¾çurl
  // eg: images.unsplash.com(notionå¾åºçææå¾çé½ä¼æ¿æ¢),å¦æä½ å¨ notion éå·²ç»æ·»å äºä¸ä¸ªéæºå¾ç urlï¼æ°å·§é£ä¸ªæå¡è·è·¯æèææï¼æ³ä¸é®åæ¢ææéå¾å¯ä»¥å°è¯¥ url éç½®å¨è¿é
  // é»è®¤ä¸ä¼å°ä½ ä¸ä¼ å° notionçä¸»é¡µå°é¢å¾åå¤´åä¹ç»æ¿æ¢ï¼å»ºè®®å°ä¸»é¡µå°é¢å¾åå¤´åæ¾å¨å¶ä»å¾åºï¼å¨ notion ééç½® link å³å¯ã

  // START ************ç½ç«å­ä½*****************

  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans', // ['font-serif','font-sans'] ä¸¤ç§å¯éï¼åå«æ¯è¡¬çº¿åæ è¡¬çº¿: åè https://www.jianshu.com/p/55e410bd2115
  // å­ä½CSS ä¾å¦ https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css
  FONT_URL: [
    // 'https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css',
    'https://fonts.googleapis.com/css?family=Inter&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap',
    'http://fonts.googleapis.com/css?family=Poppins&display=swap'
  ],
  // æ è¡¬çº¿å­ä½ ä¾å¦'"LXGW WenKai"'
  FONT_SANS: [
    // '"LXGW WenKai"',
    'Inter',
    'Helvetica',
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Helvetica Neue"',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],
  // è¡¬çº¿å­ä½ ä¾å¦'"LXGW WenKai"'
  FONT_SERIF: [
    // '"LXGW WenKai"',
    'Inter',
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  FONT_AWESOME: process.env.NEXT_PUBLIC_FONT_AWESOME_PATH || 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', // font-awesome å­ä½å¾æ å°å; å¯é /css/all.min.css ï¼ https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css

  // END ************ç½ç«å­ä½*****************
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // æ¯å¦åè®¸å¤å¶é¡µé¢åå®¹ é»è®¤åè®¸ï¼å¦æè®¾ç½®ä¸ºfalseãåå¨æ ç¦æ­¢å¤å¶åå®¹ã
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU: process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU || false, // èªå®ä¹å³é®èåï¼è¦çç³»ç»èå

  // èªå®ä¹å¤é¨èæ¬ï¼å¤é¨æ ·å¼
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // ä¾§æ å¸å± æ¯å¦åè½¬(å·¦åå³,å³åå·¦) å·²æ¯æä¸»é¢: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE: process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // ä¸ä¸ªå°æä»¶å±ç¤ºä½ çfacebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // éæ¬ Facebook Page widget çæ¨é¡æ¬ï¼å¡«''åç¡æ¨é¡æ¬ e.g FACEBOOK ç²çµ²å'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page çé£çµ e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID ä¾åç¨ messenger èå¤©åè½
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '', // Facebook App ID ä¾åç¨ messenger èå¤©åè½ è·å: https://developers.facebook.com/

  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // å¤æ¡å· é½ICPå¤XXXXXXX

  // START********ä»£ç ç¸å³********
  // PrismJs ä»£ç ç¸å³
  PRISM_JS_PATH: 'https://npm.elemecdn.com/prismjs@1.29.0/components/',
  PRISM_JS_AUTO_LOADER: 'https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',

  // ä»£ç ä¸»é¢ @see https://github.com/PrismJS/prism-themes
  PRISM_THEME_PREFIX_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_PREFIX_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.css', // ä»£ç åé»è®¤ä¸»é¢
  PRISM_THEME_SWITCH: process.env.NEXT_PUBLIC_PRISM_THEME_SWITCH || true, // æ¯å¦å¼å¯æµè²/æ·±è²æ¨¡å¼ä»£ç ä¸»é¢åæ¢ï¼ å¼å¯åå°æ¾ç¤ºä»¥ä¸ä¸¤ä¸ªä¸»é¢
  PRISM_THEME_LIGHT_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_LIGHT_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-solarizedlight.css', // æµè²æ¨¡å¼ä¸»é¢
  PRISM_THEME_DARK_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_DARK_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css', // æ·±è²æ¨¡å¼ä¸»é¢

  CODE_MAC_BAR: process.env.NEXT_PUBLIC_CODE_MAC_BAR || true, // ä»£ç å·¦ä¸è§æ¾ç¤ºmacççº¢é»ç»¿å¾æ 
  CODE_LINE_NUMBERS: process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || true, // æ¯å¦æ¾ç¤ºè¡å·
  CODE_COLLAPSE: process.env.NEXT_PUBLIC_CODE_COLLAPSE || true, // æ¯å¦æ¯ææå ä»£ç æ¡
  CODE_COLLAPSE_EXPAND_DEFAULT: process.env.NEXT_PUBLIC_CODE_COLLAPSE_EXPAND_DEFAULT || true, // æå ä»£ç é»è®¤æ¯å±å¼ç¶æ

  // END********ä»£ç ç¸å³********

  // Mermaid å¾è¡¨CDN
  MERMAID_CDN: process.env.NEXT_PUBLIC_MERMAID_CDN || 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.4/mermaid.min.js', // CDN
  // QRCodeCDN
  QR_CODE_CDN: process.env.NEXT_PUBLIC_QR_CODE_CDN || 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',

  BACKGROUND_LIGHT: '#F2F3F4', // use hex value, don't forget '#' e.g #fffefc
  BACKGROUND_DARK: '#212F3D', // use hex value, don't forget '#'
  SUB_PATH: '', // leave this empty unless you want to deploy in a folder

  POST_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_POST_SHARE_BAR || 'true', // æç« åäº«åè½ ï¼å°å¨åºé¨æ¾ç¤ºä¸ä¸ªåäº«æ¡
  POSTS_SHARE_SERVICES: process.env.NEXT_PUBLIC_POST_SHARE_SERVICES || 'link,email,instapaper', // åäº«çæåï¼æé¡ºåºæ¾ç¤º,éå·éå¼
  // æææ¯æçåäº«æå¡ï¼link(å¤å¶é¾æ¥),wechat(å¾®ä¿¡),qq,weibo(å¾®å),email(é®ä»¶),facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin,vkshare,okshare,tumblr,livejournal,mailru,viber,workplace,pocket,instapaper,hatena

  POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX || 'article',
  // POSTç±»åæç« çé»è®¤è·¯å¾åç¼ï¼ä¾å¦é»è®¤POSTç±»åçè·¯å¾æ¯  /article/[slug]
  // å¦ææ­¤é¡¹éç½®ä¸º '' ç©ºï¼ åæç« å°æ²¡æåç¼è·¯å¾ï¼ä½¿ç¨åºæ¯ï¼ å¸ææç« åç¼è·¯å¾ä¸º /post çæåµ æ¯æå¤çº§
  // æ¯æ´é¡ä¼¼ WP å¯èªè¨æç« é£çµæ ¼å¼çåè½ï¼https://wordpress.org/documentation/article/customize-permalinks/ï¼ç®ååªåå¯¦ä½ %year%/%month%/%day%
  // ä¾ï¼å¦æ³é£çµæ¹æåç¶´ article + æéæ³è¨ï¼å¯è®æ´çºï¼ 'article/%year%/%month%/%day%'

  POST_LIST_STYLE: process.env.NEXT_PUBLIC_POST_LIST_STYLE || 'page', // ['page','scroll] æç« åè¡¨æ ·å¼:é¡µç åé¡µãåé¡µæ»å¨å è½½
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', //  æ¯å¦å¨åè¡¨å è½½æç« é¢è§
  POST_PREVIEW_LINES: 3, // é¢è§åå®¢è¡æ°
  POST_RECOMMEND_COUNT: 3, // æ¨èæç« æ°é
  POSTS_PER_PAGE: 4, // post counts per page
  POSTS_SORT_BY: process.env.NEXT_PUBLIC_POST_SORT_BY || 'notion', // æåºæ¹å¼ 'date'ææ¶é´,'notion'ç±notionæ§å¶

  ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || null, // å¨è¿éæ¥ç https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_ADMIN_APP_KEY: process.env.ALGOLIA_ADMIN_APP_KEY || null, // ç®¡çåå°çKEYï¼ä¸è¦æ´é²å¨ä»£ç ä¸­ï¼å¨è¿éæ¥ç https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_SEARCH_ONLY_APP_KEY: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_APP_KEY || null, // å®¢æ·ç«¯æç´¢ç¨çKEY
  ALGOLIA_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_INDEX || null, // å¨Algoliaä¸­åå»ºä¸ä¸ªindexç¨ä½æ°æ®åº
  //   ALGOLIA_RECREATE_DATA: process.env.ALGOLIA_RECREATE_DATA || process.env.npm_lifecycle_event === 'build', // ä¸ºtrueæ¶éæ°æå»ºç´¢å¼æ°æ®; é»è®¤å¨buildæ¶ä¼æå»º

  PREVIEW_CATEGORY_COUNT: 5,
  PREVIEW_TAG_COUNT: 5,

  POST_DISABLE_GALLERY_CLICK: process.env.NEXT_PUBLIC_POST_DISABLE_GALLERY_CLICK || false,

  //   ********å¨æç¹æç¸å³********
  // é¼ æ ç¹å»çè±ç¹æ
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || false,
  
  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],

  SAKURA: process.env.NEXT_PUBLIC_SAKURA || false,
  NEST: process.env.NEXT_PUBLIC_NEST || false,
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false,
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || false,
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || false,

  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
  WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // æ¯å¦æ¾ç¤º
  WEB_WHIZ_BASE_URL: process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // å¯ä»¥èªå»ºæå¡å¨
  WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // å¨åå°è·åID

  // æ¬æµ®æä»¶
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || false, // æ¯å¦æ¾ç¤ºå® ç©æä»¶
  WIDGET_PET_LINK:
        process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
        'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // æä»¶æ¨¡åå°å @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME: process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || true, // ç¹å»å® ç©æä»¶åæ¢åå®¢ä¸»é¢

  // é³ä¹æ­æ¾æä»¶
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || false, // æ¯å¦ä½¿ç¨é³ä¹æ­æ¾æä»¶
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // æ¯å¦å¨å·¦ä¸è§æ¾ç¤ºæ­æ¾ååæ¢ï¼å¦æä½¿ç¨æ­æ¾å¨ï¼æå¼èªå¨æ­æ¾åéèï¼å°±ä¼ä»¥ç±»ä¼¼èæ¯é³ä¹çæ¹å¼æ­æ¾ï¼æ æ³åæ¶åæå
  MUSIC_PLAYER_AUTO_PLAY:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // æ¯å¦èªå¨æ­æ¾ï¼ä¸è¿èªå¨æ­æ¾æ¶å¸¸ä¸çæï¼ç§»å¨è®¾å¤ä¸æ¯æèªå¨æ­æ¾ï¼
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // æ­è¯æ¾ç¤ºç±»åï¼å¯éå¼ï¼ 3 | 1 | 0ï¼0ï¼ç¦ç¨ lrc æ­è¯ï¼1ï¼lrc æ ¼å¼çå­ç¬¦ä¸²ï¼3ï¼lrc æä»¶ urlï¼ï¼åææ¯æéç½®æ­è¯è·¯å¾ï¼å¯¹ meting æ æï¼
  MUSIC_PLAYER_CDN_URL:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
        'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // é»è®¤æ­æ¾æ¹å¼ï¼é¡ºåº listï¼éæº random
  MUSIC_PLAYER_AUDIO_LIST: [
    // ç¤ºä¾é³ä¹åè¡¨ãé¤äºä»¥ä¸éç½®å¤ï¼è¿å¯éç½®æ­è¯ï¼å·ä½éç½®é¡¹çæ­¤ææ¡£ https://aplayer.js.org/#/zh-Hans/
    {
      name: 'é£ãå±ã«èãæ°æã¡',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731419.mp3',
      cover:
            'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: 'çé½ã°ã©ã³ã»ã«',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731355.mp3',
      cover:
            'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // æ¯å¦è¦å¼å¯ MetingJSï¼ä»å¹³å°è·åæ­åãä¼è¦çèªå®ä¹ç MUSIC_PLAYER_AUDIO_LISTï¼æ´å¤éç½®ä¿¡æ¯ï¼https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // é³ä¹å¹³å°ï¼[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // å¯¹åºæ­åç id
  MUSIC_PLAYER_METING_LRC_TYPE:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // å¯éå¼ï¼ 3 | 1 | 0ï¼0ï¼ç¦ç¨ lrc æ­è¯ï¼1ï¼lrc æ ¼å¼çå­ç¬¦ä¸²ï¼3ï¼lrc æä»¶ urlï¼

  //   ********æä»¶ç»ä»¶ç¸å³********
  // ----> è¯è®ºäºå¨ å¯åæ¶å¼å¯å¤ä¸ªæ¯æ WALINE VALINE GISCUS CUSDIS UTTERRANCES GITALK

  // artalk è¯è®ºæä»¶
  COMMENT_ARTALK_SERVER: process.env.NEXT_PUBLIC_COMMENT_ARTALK_SERVER || '', // ArtalkServertåç«¯å°å https://artalk.js.org/guide/deploy.html
  COMMENT_ARTALK_JS: process.env.NEXT_PUBLIC_COMMENT_ARTALK_JS || 'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.js', // ArtalkServert js cdn
  COMMENT_ARTALK_CSS: process.env.NEXT_PUBLIC_COMMENT_ARTALK_CSS || 'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.css', // ArtalkServert css cdn

  // twikoo
  COMMENT_TWIKOO_ENV_ID: process.env.NEXT_PUBLIC_COMMENT_ENV_ID || '', // TWIKOOåç«¯å°å è¾è®¯äºç¯å¢å¡«envIdï¼Vercelç¯å¢å¡«ååï¼æç¨ï¼https://tangly1024.com/article/notionnext-twikoo
  COMMENT_TWIKOO_COUNT_ENABLE: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_COUNT_ENABLE || false, // åå®¢åè¡¨æ¯å¦æ¾ç¤ºè¯è®ºæ°
  COMMENT_TWIKOO_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_CDN_URL || 'https://cdn.staticfile.org/twikoo/1.6.17/twikoo.min.js', // twikooå®¢æ·ç«¯cdn

  // utterance
  COMMENT_UTTERRANCES_REPO:
        process.env.NEXT_PUBLIC_COMMENT_UTTERRANCES_REPO || '', // ä½ çä»£ç ä»åºåï¼ ä¾å¦ææ¯ 'tangly1024/NotionNext'ï¼ æ´å¤ææ¡£åè https://utteranc.es/

  // giscus @see https://giscus.app/
  COMMENT_GISCUS_REPO: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO || '', // ä½ çGithubä»åºå e.g 'tangly1024/NotionNext'
  COMMENT_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID || '', // ä½ çGithub Repo ID e.g ( è¨­å®å® giscus å³å¯çå° )
  COMMENT_GISCUS_CATEGORY_ID:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID || '', // ä½ çGithub Discussions å§ç Category ID ( è¨­å®å® giscus å³å¯çå° )
  COMMENT_GISCUS_MAPPING:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING || 'pathname', // ä½ çGithub Discussions ä½¿ç¨åªç¨®æ¹å¼ä¾æ¨å®æç« , é è¨­ 'pathname'
  COMMENT_GISCUS_REACTIONS_ENABLED:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED || '1', // ä½ ç Giscus æ¯å¦éåæç« è¡¨æç¬¦è '1' éå "0" éé é è¨­éå
  COMMENT_GISCUS_EMIT_METADATA:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA || '0', // ä½ ç Giscus æ¯å¦æå Metadata '1' éå '0' éé é è¨­éé
  COMMENT_GISCUS_INPUT_POSITION:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION || 'bottom', // ä½ ç Giscus ç¼è¡¨çè¨ä½ç½® 'bottom' å°¾é¨ 'top' é é¨, é è¨­ 'bottom'
  COMMENT_GISCUS_LANG: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG || 'zh-CN', // ä½ ç Giscus èªè¨ e.g 'en', 'zh-TW', 'zh-CN', é è¨­ 'en'
  COMMENT_GISCUS_LOADING:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_LOADING || 'lazy', // ä½ ç Giscus è¼å¥æ¯å¦æ¼¸é²å¼è¼å¥, é è¨­ 'lazy'
  COMMENT_GISCUS_CROSSORIGIN:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_CROSSORIGIN || 'anonymous', // ä½ ç Giscus å¯ä»¥è·¨ç¶²å, é è¨­ 'anonymous'

  COMMENT_CUSDIS_APP_ID: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_APP_ID || '', // data-app-id 36ä½ see https://cusdis.com/
  COMMENT_CUSDIS_HOST:
        process.env.NEXT_PUBLIC_COMMENT_CUSDIS_HOST || 'https://cusdis.com', // data-host, change this if you're using self-hosted version
  COMMENT_CUSDIS_SCRIPT_SRC:
        process.env.NEXT_PUBLIC_COMMENT_CUSDIS_SCRIPT_SRC ||
        '/js/cusdis.es.js', // change this if you're using self-hosted version

  // gitalkè¯è®ºæä»¶ æ´å¤åè https://gitalk.github.io/
  COMMENT_GITALK_REPO: process.env.NEXT_PUBLIC_COMMENT_GITALK_REPO || '', // ä½ çGithubä»åºåï¼ä¾å¦ 'NotionNext'
  COMMENT_GITALK_OWNER: process.env.NEXT_PUBLIC_COMMENT_GITALK_OWNER || '', // ä½ çç¨æ·å e.g tangly1024
  COMMENT_GITALK_ADMIN: process.env.NEXT_PUBLIC_COMMENT_GITALK_ADMIN || '', // ç®¡çåç¨æ·åãä¸è¬æ¯èªå·± e.g 'tangly1024'
  COMMENT_GITALK_CLIENT_ID:
        process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_ID || '', // e.g 20ä½ID ï¼ å¨gitalkåå°è·å
  COMMENT_GITALK_CLIENT_SECRET:
        process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_SECRET || '', // e.g 40ä½IDï¼ å¨gitalkåå°è·å
  COMMENT_GITALK_DISTRACTION_FREE_MODE: false, // ç±»ä¼¼facebookçæ å¹²æ°æ¨¡å¼
  COMMENT_GITALK_JS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_JS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js', // gitalkå®¢æ·ç«¯ js cdn
  COMMENT_GITALK_CSS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_CSS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css', // gitalkå®¢æ·ç«¯ css cdn

  COMMENT_GITTER_ROOM: process.env.NEXT_PUBLIC_COMMENT_GITTER_ROOM || '', // gitterèå¤©å®¤ see https://gitter.im/ ä¸éè¦åçç©º
  COMMENT_DAO_VOICE_ID: process.env.NEXT_PUBLIC_COMMENT_DAO_VOICE_ID || '', // DaoVoice http://dashboard.daovoice.io/get-started
  COMMENT_TIDIO_ID: process.env.NEXT_PUBLIC_COMMENT_TIDIO_ID || '', // [tidio_id] -> //code.tidio.co/[tidio_id].js

  COMMENT_VALINE_CDN: process.env.NEXT_PUBLIC_VALINE_CDN || 'https://unpkg.com/valine@1.5.1/dist/Valine.min.js',
  COMMENT_VALINE_APP_ID: process.env.NEXT_PUBLIC_VALINE_ID || '', // Valine @see https://valine.js.org/quickstart.html æ https://github.com/stonehank/react-valine#%E8%8E%B7%E5%8F%96app-id-%E5%92%8C-app-key
  COMMENT_VALINE_APP_KEY: process.env.NEXT_PUBLIC_VALINE_KEY || '',
  COMMENT_VALINE_SERVER_URLS: process.env.NEXT_PUBLIC_VALINE_SERVER_URLS || '', // è¯¥éç½®éç¨äºå½åèªå®ä¹ååç¨æ·, æµ·å¤çæ¬ä¼èªå¨æ£æµ(æ éæå¨å¡«å) @see https://valine.js.org/configuration.html#serverURLs
  COMMENT_VALINE_PLACEHOLDER:
        process.env.NEXT_PUBLIC_VALINE_PLACEHOLDER || 'Take a seat', // å¯ä»¥æ­éåå°ç®¡çè¯è®º https://github.com/DesertsP/Valine-Admin  ä¾¿äºæ¥çè¯è®ºï¼ä»¥åé®ä»¶éç¥ï¼åå¾è¯è®ºè¿æ»¤ç­åè½

  COMMENT_WALINE_SERVER_URL: process.env.NEXT_PUBLIC_WALINE_SERVER_URL || '', // è¯·éç½®å®æ´çWalineè¯è®ºå°å ä¾å¦ hhttps://preview-waline.tangly1024.com @see https://waline.js.org/guide/get-started.html
  COMMENT_WALINE_RECENT: process.env.NEXT_PUBLIC_WALINE_RECENT || false, // ææ°è¯è®º

  // æ­¤è¯è®ºç³»ç»åºäºWebMentionï¼ç»èå¯åèhttps://webmention.io
  // å®æ¯ä¸ä¸ªåºäºIndieWebçå¿µçå¼æ¾å¼è¯è®ºç³»ç»ï¼ä¸æ¹COMMENT_WEBMENTIONåå«çå±æ§çééç½®ï¼
  // ENABLE: æ¯å¦å¼å¯
  // AUTH: Webmentionä½¿ç¨çIndieLoginï¼å¯ä½¿ç¨TwitteræGithubä¸ªäººé¡µé¢è¿ç»
  // HOSTNAME: Webmentionç»å®ä¹ç½åï¼éå¸¸å³ä¸ºæ¬ç«ç½å
  // TWITTER_USERNAME: è¯è®ºæ¾ç¤ºåºåéè¦çèµè®¯
  // TOKEN: WebmentionçAPI token
  COMMENT_WEBMENTION_ENABLE: process.env.NEXT_PUBLIC_WEBMENTION_ENABLE || false,
  COMMENT_WEBMENTION_AUTH: process.env.NEXT_PUBLIC_WEBMENTION_AUTH || '',
  COMMENT_WEBMENTION_HOSTNAME: process.env.NEXT_PUBLIC_WEBMENTION_HOSTNAME || '',
  COMMENT_WEBMENTION_TWITTER_USERNAME: process.env.NEXT_PUBLIC_TWITTER_USERNAME || '',
  COMMENT_WEBMENTION_TOKEN: process.env.NEXT_PUBLIC_WEBMENTION_TOKEN || '',

  // <---- è¯è®ºæä»¶

  // ----> ç«ç¹ç»è®¡
  ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || false, // vercelèªå¸¦çç»è®¡ https://vercel.com/docs/concepts/analytics/quickstart https://github.com/tangly1024/NotionNext/issues/897
  // ANALYTICS_BUSUANZI_ENABLE: process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE || false, // å±ç¤ºç½ç«éè¯»éãè®¿é®æ° see http://busuanzi.ibruce.info/
  // ANALYTICS_BAIDU_ID: process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', // e.g åªéè¦å¡«åç¾åº¦ç»è®¡çidï¼[baidu_id] -> https://hm.baidu.com/hm.js?[baidu_id]
  // ANALYTICS_CNZZ_ID: process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', // åªéè¦å¡«åç«é¿ç»è®¡çid, [cnzz_id] -> https://s9.cnzz.com/z_stat.php?id=[cnzz_id]&web_id=[cnzz_id]
  // ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || '', // è°·æ­Analyticsçid e.g: G-XXXXXXXXXX

  // Matomo ç½ç«ç»è®¡
  MATOMO_HOST_URL: process.env.NEXT_PUBLIC_MATOMO_HOST_URL || '', // Matomoæå¡å¨å°åï¼ä¸å¸¦ææ 
  MATOMO_SITE_ID: process.env.NEXT_PUBLIC_MATOMO_SITE_ID || '', // Matomoç½ç«ID
  // ACKEEç½ç«è®¿å®¢ç»è®¡å·¥å·
  ANALYTICS_ACKEE_TRACKER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '', // e.g 'https://ackee.tangly1024.com/tracker.js'
  ANALYTICS_ACKEE_DATA_SERVER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '', // e.g https://ackee.tangly1024.com , don't end with a slash
  ANALYTICS_ACKEE_DOMAIN_ID: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '', // e.g '82e51db6-dec2-423a-b7c9-b4ff7ebb3302'

  SEO_GOOGLE_SITE_VERIFICATION:
        process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  SEO_BAIDU_SITE_VERIFICATION:
        process.env.NEXT_PUBLIC_SEO_BAIDU_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  // <---- ç«ç¹ç»è®¡

  // START---->è¥æ¶ç¸å³

  // è°·æ­å¹¿å
  ADSENSE_GOOGLE_ID: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || '', // è°·æ­å¹¿åID e.g ca-pub-xxxxxxxxxxxxxxxx
  ADSENSE_GOOGLE_TEST: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, // è°·æ­å¹¿åIDæµè¯æ¨¡å¼ï¼è¿ç§æ¨¡å¼è·ååçæµè¯å¹¿åï¼ç¨äºå¼å https://www.tangly1024.com/article/local-dev-google-adsense
  ADSENSE_GOOGLE_SLOT_IN_ARTICLE: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || '', // Google AdScene>å¹¿å>æååå¹¿å>æ°å»ºæç« ååµå¹¿å ç²è´´htmlä»£ç ä¸­çdata-ad-slotå¼
  ADSENSE_GOOGLE_SLOT_FLOW: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW || '', // Google AdScene>å¹¿å>æååå¹¿å>æ°å»ºä¿¡æ¯æµå¹¿å
  ADSENSE_GOOGLE_SLOT_NATIVE: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || '', // Google AdScene>å¹¿å>æååå¹¿å>æ°å»ºåçå¹¿å
  ADSENSE_GOOGLE_SLOT_AUTO: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || '', // Google AdScene>å¹¿å>æååå¹¿å>æ°å»ºå±ç¤ºå¹¿å ï¼èªå¨å¹¿åï¼

  // ä¸ç»´å¹¿å
  AD_WWADS_ID: process.env.NEXT_PUBLIC_WWAD_ID || null, // https://wwads.cn/ åå»ºæ¨çä¸ç»´å¹¿åååID
  AD_WWADS_BLOCK_DETECT: process.env.NEXT_PUBLIC_WWADS_AD_BLOCK_DETECT || false, // æ¯å¦å¼å¯WWADSå¹¿åå±è½æä»¶æ£æµ,å¼å¯åä¼å¨å¹¿åä½ä¸ä»¥æå­æç¤º @see https://github.com/bytegravity/whitelist-wwads

  // END<----è¥æ¶ç¸å³

  // èªå®ä¹éç½®notionæ°æ®åºå­æ®µå
  NOTION_PROPERTY_NAME: {
    password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || 'password',
    type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || 'type', // æç« ç±»åï¼
    type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || 'Post', // å½typeæç« ç±»åä¸æ­¤å¼ç¸åæ¶ï¼ä¸ºåæã
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || 'Page', // å½typeæç« ç±»åä¸æ­¤å¼ç¸åæ¶ï¼ä¸ºåé¡µã
    type_notice:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || 'Notice', // å½typeæç« ç±»åä¸æ­¤å¼ç¸åæ¶ï¼ä¸ºå¬åã
    type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || 'Menu', // å½typeæç« ç±»åä¸æ­¤å¼ç¸åæ¶ï¼ä¸ºèåã
    type_sub_menu:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || 'SubMenu', // å½typeæç« ç±»åä¸æ­¤å¼ç¸åæ¶ï¼ä¸ºå­èåã
    title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || 'title', // æç« æ é¢
    status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || 'status',
    status_publish:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || 'Published', // å½statusç¶æå¼ä¸æ­¤ç¸åæ¶ä¸ºåå¸ï¼å¯ä»¥ä¸ºä¸­æ
    status_invisible:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || 'Invisible', // å½statusç¶æå¼ä¸æ­¤ç¸åæ¶ä¸ºéèåå¸ï¼å¯ä»¥ä¸ºä¸­æ ï¼ é¤æ­¤ä¹å¤å¶ä»é¡µé¢ç¶æä¸ä¼æ¾ç¤ºå¨åå®¢ä¸
    summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || 'summary',
    slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || 'slug',
    category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || 'category',
    date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || 'date',
    tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || 'tags',
    icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || 'icon'
  },

  // RSSè®¢é
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // æ¯å¦å¼å¯RSSè®¢éåè½
  MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID || null, // å¼å¯mailichimpé®ä»¶è®¢é å®¢æ·åè¡¨ID ï¼å·ä½ä½¿ç¨æ¹æ³åéææ¡£
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || null, // å¼å¯mailichimpé®ä»¶è®¢é APIkey

  // ä½åºéç½®
  AVATAR: process.env.NEXT_PUBLIC_AVATAR || '/avatar.svg', // ä½èå¤´åï¼è¢«notionä¸­çICONè¦çãè¥æ ICONååpublicç®å½ä¸çavatar.png
  TITLE: process.env.NEXT_PUBLIC_TITLE || 'ericbrooks.io', // ç«ç¹æ é¢ ï¼è¢«notionä¸­çé¡µé¢æ é¢è¦çï¼æ­¤å¤è¯·å¿çç©ºç½ï¼å¦åæå¡å¨æ æ³ç¼è¯
  HOME_BANNER_IMAGE:
        process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || '/bg_image.jpg', // é¦é¡µèæ¯å¤§å¾, ä¼è¢«notionä¸­çå°é¢å¾è¦çï¼è¥æ å°é¢å¾åä¼ä½¿ç¨ä»£ç ä¸­ç /public/bg_image.jpg æä»¶
  DESCRIPTION:
        process.env.NEXT_PUBLIC_DESCRIPTION || 'ericbrooks.io', // ç«ç¹æè¿°ï¼è¢«notionä¸­çé¡µé¢æè¿°è¦ç

  // ç½ç«å¾ç
  IMG_LAZY_LOAD_PLACEHOLDER: process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER || 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', // æå è½½å ä½å¾çå°åï¼æ¯æbase64æurl
  IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion', // æ­¤éç½®å·²å¤±æï¼è¯·å¿ä½¿ç¨ï¼AMAZONæ¹æ¡ä¸åæ¯æï¼ä»æ¯æNotionæ¹æ¡ã ['Notion','AMAZON'] ç«ç¹å¾çåç¼ é»è®¤ Notion:(https://notion.so/images/xx) ï¼ AMAZON(https://s3.us-west-2.amazonaws.com/xxx)
  IMG_SHADOW: process.env.NEXT_PUBLIC_IMG_SHADOW || false, // æç« å¾çæ¯å¦èªå¨æ·»å é´å½±

  // å¼åç¸å³
  NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN || '', // Useful if you prefer not to make your database public
  DEBUG: process.env.NEXT_PUBLIC_DEBUG || false, // æ¯å¦æ¾ç¤ºè°è¯æé®
  ENABLE_CACHE: process.env.ENABLE_CACHE || process.env.npm_lifecycle_event === 'build', // ç¼å­å¨å¼åè°è¯åæåè¿ç¨ä¸­éæ©æ§å¼å¯ï¼æ­£å¼é¨ç½²å¼å¯æ­¤åè½æä¹ä¸å¤§ã
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  VERSION: process.env.NEXT_PUBLIC_VERSION // çæ¬å·
}

module.exports = BLOG

