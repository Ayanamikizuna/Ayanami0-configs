// Ayanami0's override //
const overrideConfig = {
  "mixed-port": 7890,
  "redir-port": 7891,
  "tproxy-port": 1536,
  "ipv6": false,
  "mode": "Rule",
  "allow-lan": true,
  "bind-address": "*",
  "disable-keep-alive": true,
  "unified-delay": true,
  "tcp-concurrent": true,
  "log-level": "silent",
  "find-process-mode": "strict",
  "global-client-fingerprint": "random",

  "external-controller": "127.0.0.1:9090",
  "secret": "123456",
  "external-ui": "WebUI/Zashboard",
  "external-ui-url": "https://github.com/Zephyruso/zashboard/releases/latest/download/dist-no-fonts.zip",
  "external-controller-cors": {
    "allow-origins": ["*"],
    "allow-private-network": true
  },

  "profile": {
    "store-selected": true,
    "store-fake-ip": true
  },

  "sniffer": {
    "enable": true,
    "force-dns-mapping": true,
    "parse-pure-ip": true,
    "override-destination": true,
    "sniff": {
      "HTTP": {
        "ports": [80, "8080-8880"]
      },
      "TLS": {
        "ports": [443, 8443]
      },
      "QUIC": {
        "ports": [443, 8443]
      }
    },
    "force-domain": ["+.v2ex.com"],
    "skip-domain": ["Mijia Cloud", "+.push.apple.com"]
  },

  "tun": {
    "enable": false,
    "device": "Meta",
    "stack": "mixed",
    "mtu": 1480,
    "dns-hijack": ["any:53", "tcp://any:53"],
    "udp-timeout": 300,
    "auto-route": true,
    "strict-route": true,
    "auto-redirect": false,
    "auto-detect-interface": true
  },

  "dns": {
    "enable": true,
    "ipv6": false,
    "listen": "0.0.0.0:1053",
    "prefer-h3": false,
    "respect-rules": true,
    "cache-algorithm": "arc",
    "cache-size": 4096,
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter-mode": "blacklist",
    "fake-ip-filter": [
      "*.lan",
      "*.local",
      "time.*.com",
      "time.*.gov",
      "ntp.*.com",
      "pool.ntp.org",
      "*.msftconnecttest.com",
      "*.msftncsi.com",
      "RULE-SET:Lan_Domain",
      "RULE-SET:GoogleFCM_Domain"
    ],
    "default-nameserver": [
      "223.5.5.5",
      "119.29.29.29",
      "223.6.6.6"
    ],
    "direct-nameserver": [
      "https://dns.alidns.com/dns-query",
      "https://doh.pub/dns-query"
    ],
    "proxy-server-nameserver": [
      "https://dns.alidns.com/dns-query",
      "https://doh.pub/dns-query"
    ],
    "nameserver": [
      "https://cloudflare-dns.com/dns-query",
      "https://dns.google/dns-query"
    ],
    "nameserver-policy": {
      "RULE-SET:ChinaMax_Domain,Microsoft_Domain": [
        "https://dns.alidns.com/dns-query",
        "https://doh.pub/dns-query"
      ]
    }
  },

  "proxy-groups": [
    {
      "name": "PROXY",
      "icon": "https://raw.githubusercontent.com/GitMetaio/Surfing@rm/Home/icon/All.svg",
      "type": "select",
      "proxies": [
        "HK",
        "SG",
        "JP",
        "TW",
        "US",
        "WD",
        "LowRate",
        "DIRECT"
      ],
      "include-all": true
    },
    {
      "name": "HK",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png",
      "filter": "^(?=.*(港|HK|hk|Hong Kong|HongKong|hongkong)).*$",
      "type": "select",
      "include-all": true
    },
    {
      "name": "SG",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png",
      "filter": "^(?=.*(新加坡|坡|狮城|SG|Singapore)).*$",
      "type": "select",
      "include-all": true
    },
    {
      "name": "JP",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png",
      "filter": "^(?=.*(日本|川日|东京|大阪|泉日|埼玉|沪日|深日|JP|Japan)).*$",
      "type": "select",
      "include-all": true
    },
    {
      "name": "TW",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Taiwan.png",
      "filter": "^(?=.*(台|新北|彰化|TW|Taiwan)).*$",
      "type": "select",
      "include-all": true
    },
    {
      "name": "US",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/United_States.png",
      "filter": "^(?=.*(美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|US|United States|UnitedStates)).*$",
      "type": "select",
      "include-all": true
    },
    {
      "name": "WD",
      "icon": "https://raw.githubusercontent.com/GitMetaio/Surfing/refs/heads/rm/Home/icon/Globe.svg",
      "filter": "^(?!.*(港|HK|hk|Hong Kong|HongKong|hongkong|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|JP|Japan|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|US|United States|UnitedStates|台|新北|彰化|TW|Taiwan|新加坡|坡|狮城|SG|Singapore|灾|网易|Netease|套餐|重置|剩余|到期|订阅|群|账户|流量|有效期|时间|官网)).*$",
      "type": "select",
      "include-all": true
    },
    {
      "name": "LowRate",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Download.png",
      "filter": "(?<![0-9])0\\.(?:0[0-9]{1,2}|[1-9])(?![0-9])",
      "type": "select",
      "include-all": true
    },
    {
      "name": "Emby",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Emby.png",
      "type": "select",
      "proxies": [
        "LowRate",
        "HK",
        "SG",
        "JP",
        "TW",
        "US",
        "WD"
      ]
    },
    {
      "name": "Telegram",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Telegram.png",
      "type": "select",
      "proxies": [
        "HK",
        "SG",
        "JP",
        "TW",
        "US",
        "WD"
      ]
    },
    {
      "name": "ADS",
      "icon": "https://raw.githubusercontent.com/GitMetaio/Surfing/rm/Home/icon/No-ads-all.svg",
      "type": "select",
      "proxies": [
        "REJECT",
        "PROXY"
      ]
    }
  ],

  "rule-providers": {
    "ChinaMax_IP": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "mrs",
      "interval": 86400,
      "path": "./rules/ChinaMax_OCD_IP.mrs",
      "url": "https://raw.githubusercontent.com/Ayanamikizuna/Rule-for-OCD/master/rule/Clash/ChinaMax/ChinaMax_OCD_IP.mrs"
    },
    "ChinaMax_Domain": {
      "type": "http",
      "behavior": "domain",
      "format": "mrs",
      "interval": 86400,
      "path": "./rules/ChinaMax_OCD_Domain.mrs",
      "url": "https://raw.githubusercontent.com/Ayanamikizuna/Rule-for-OCD/master/rule/Clash/ChinaMax/ChinaMax_OCD_Domain.mrs"
    },
    "Lan_Domain": {
      "type": "http",
      "behavior": "domain",
      "format": "mrs",
      "interval": 86400,
      "path": "./rules/Lan_OCD_Domain.mrs",
      "url": "https://raw.githubusercontent.com/Ayanamikizuna/Rule-for-OCD/master/rule/Clash/Lan/Lan_OCD_Domain.mrs"
    },
    "Lan_IP": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "mrs",
      "interval": 86400,
      "path": "./rules/Lan_OCD_IP.mrs",
      "url": "https://raw.githubusercontent.com/Ayanamikizuna/Rule-for-OCD/master/rule/Clash/Lan/Lan_OCD_IP.mrs"
    },
    "Direct": {
      "type": "http",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "path": "./rules/direct.yaml",
      "url": "https://raw.githubusercontent.com/Ayanamikizuna/Rule-for-OCD/master/rule/Clash/Direct/Direct.yaml"
    },
    "Global_Domain": {
      "type": "http",
      "behavior": "domain",
      "format": "mrs",
      "interval": 86400,
      "path": "./rules/Global_OCD_Domain.mrs",
      "url": "https://raw.githubusercontent.com/Ayanamikizuna/Rule-for-OCD/master/rule/Clash/Global/Global_OCD_Domain.mrs"
    },
    "Global_IP": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "mrs",
      "interval": 86400,
      "path": "./rules/Global_OCD_IP.mrs",
      "url": "https://raw.githubusercontent.com/Ayanamikizuna/Rule-for-OCD/master/rule/Clash/Global/Global_OCD_IP.mrs"
    },
    "AWAvenue_Ads_Rule": {
      "type": "http",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "path": "./rules/AWAvenue_Ads_Rule_Clash.yaml",
      "url": "https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main//Filters/AWAvenue-Ads-Rule-Clash.yaml"
    },
    "Game_Domain": {
      "type": "http",
      "behavior": "domain",
      "format": "mrs",
      "interval": 86400,
      "path": "./rules/Game_OCD_Domain.mrs",
      "url": "https://raw.githubusercontent.com/Ayanamikizuna/Rule-for-OCD/master/rule/Clash/Game/Game_OCD_Domain.mrs"
    },
    "Game_IP": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "mrs",
      "interval": 86400,
      "path": "./rules/Game_OCD_IP.mrs",
      "url": "https://raw.githubusercontent.com/Ayanamikizuna/Rule-for-OCD/master/rule/Clash/Game/Game_OCD_IP.mrs"
    },
    "GameDownload_Domain": {
      "type": "http",
      "behavior": "domain",
      "format": "mrs",
      "interval": 86400,
      "path": "./rules/GameDownload_OCD_Domain.mrs",
      "url": "https://raw.githubusercontent.com/Ayanamikizuna/Rule-for-OCD/master/rule/Clash/Game/GameDownload/GameDownload_OCD_Domain.mrs"
    },
    "Emby_Domain": {
      "type": "http",
      "behavior": "domain",
      "format": "mrs",
      "interval": 86400,
      "path": "./rules/Emby_OCD_Domain.mrs",
      "url": "https://raw.githubusercontent.com/Ayanamikizuna/Rule-for-OCD/master/rule/Clash/Emby/Emby_OCD_Domain.mrs"
    },
    "Telegram_Domain": {
      "type": "http",
      "behavior": "domain",
      "format": "mrs",
      "interval": 86400,
      "path": "./rules/Telegram.mrs",
      "url": "https://raw.githubusercontent.com/Ayanamikizuna/Rule-for-OCD/master/rule/Clash/Telegram/Telegram_OCD_Domain.mrs"
    },
    "Telegram_IP": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "mrs",
      "interval": 86400,
      "path": "./rules/Telegram_IP.mrs",
      "url": "https://raw.githubusercontent.com/Ayanamikizuna/Rule-for-OCD/master/rule/Clash/Telegram/Telegram_OCD_IP.mrs"
    },
    "GoogleFCM_Domain": {
      "type": "http",
      "behavior": "domain",
      "format": "mrs",
      "interval": 86400,
      "path": "./rules/GoogleFCM.mrs",
      "url": "https://raw.githubusercontent.com/Ayanamikizuna/Rule-for-OCD/master/rule/Clash/GoogleFCM/GoogleFCM_OCD_Domain.mrs"
    },
    "GoogleFCM_IP": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "mrs",
      "interval": 86400,
      "path": "./rules/GoogleFCM_IP.mrs",
      "url": "https://raw.githubusercontent.com/Ayanamikizuna/Rule-for-OCD/master/rule/Clash/GoogleFCM/GoogleFCM_OCD_IP.mrs"
    },
    "Microsoft_Domain": {
      "type": "http",
      "behavior": "domain",
      "format": "mrs",
      "interval": 86400,
      "path": "./rules/Microsoft.mrs",
      "url": "https://raw.githubusercontent.com/Ayanamikizuna/Rule-for-OCD/master/rule/Clash/Microsoft/Microsoft_OCD_Domain.mrs"
    }
  },

  "rules": [
    "RULE-SET,Lan_Domain,DIRECT",
    "RULE-SET,Lan_IP,DIRECT,no-resolve",
    "RULE-SET,Direct,DIRECT",
    "RULE-SET,AWAvenue_Ads_Rule,ADS",
    "RULE-SET,Game_Domain,DIRECT",
    "RULE-SET,Game_IP,DIRECT",
    "RULE-SET,GameDownload_Domain,DIRECT",
    "DOMAIN-SUFFIX,immersivetranslate.com,DIRECT",
    "RULE-SET,ChinaMax_Domain,DIRECT",
    "RULE-SET,ChinaMax_IP,DIRECT",
    "RULE-SET,Emby_Domain,Emby",
    "RULE-SET,Telegram_Domain,PROXY",
    "RULE-SET,Telegram_IP,PROXY,no-resolve",
    "RULE-SET,Global_Domain,PROXY",
    "RULE-SET,Global_IP,PROXY",
    "MATCH,PROXY"
  ]
};