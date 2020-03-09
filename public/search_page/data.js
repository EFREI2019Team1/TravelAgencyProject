var TARGET = {
    FAMILY : 0,
    COUPLE : 1,
    YOUNG  : 2,
    ADULT  : 3
};

var CONTENT = {
    WORLD_HERITAGE   : 0,
    SHOPPING         : 1,
    IVENT            : 2,
    FASHION          : 3,
    MUSEUM           : 4,
    SIMBOL           : 5,
    TEA_TIME         : 6,
    PARK             : 7,
    SHOW             : 8,
    HISTORIC         : 9,
    INSTAGRAM        : 10,
    FILMING_LOCATION : 11
};

let course1  = new Course("コッツウォルズ地方とロンドン", 4, TARGET.ADULT, "UI/course01.jpg", null, 289900, [CONTENT.WORLD_HERITAGE, CONTENT.MUSEUM, CONTENT.SIMBOL]);
let course2  = new Course("最低価格！1weekぶらり旅", 7, TARGET.YOUNG, "UI/course02.jpg", null, 30000, [CONTENT.SHOPPING, CONTENT.IVENT, CONTENT.FASHION, CONTENT.TEA_TIME, CONTENT.INSTAGRAM]);
let course3  = new Course("ロンドン観光、一週間の旅", 7, TARGET.YOUNG, "UI/course03.jpg", null, 100000, [CONTENT.SHOPPING, CONTENT.MUSEUM, CONTENT.SIMBOL, CONTENT.TEA_TIME, CONTENT.INSTAGRAM]);
let course4  = new Course("ロンドン建築巡り！", 2, TARGET.COUPLE, "UI/course04.jpg", null, 20000, [CONTENT.WORLD_HERITAGE, CONTENT.SIMBOL, CONTENT.HISTORIC, CONTENT.INSTAGRAM]);
let course5  = new Course("最低価格！3daysぶらり旅", 3, TARGET.YOUNG, "UI/course05.jpg", null, 10000, [CONTENT.SHOPPING, CONTENT.IVENT, CONTENT.FASHION, CONTENT.TEA_TIME, CONTENT.INSTAGRAM]);
let course6  = new Course("最低価格！2daysぶらり旅", 2, TARGET.YOUNG, "UI/course06.jpg", null, 5000, [CONTENT.SHOPPING, CONTENT.IVENT, CONTENT.FASHION, CONTENT.TEA_TIME, CONTENT.INSTAGRAM]);
let course7  = new Course("ロンドン名所巡り", 2, TARGET.YOUNG, "UI/course07.jpg", null, 10000, [CONTENT.WORLD_HERITAGE, CONTENT.SIMBOL, CONTENT.PARK, CONTENT.HISTORIC]);
let course8  = new Course("街歩きとミュージカル鑑賞", 2, TARGET.FAMILY, "UI/course08.jpg", null, 15000, [CONTENT.SHOPPING, CONTENT.SHOW, CONTENT.HISTORIC]);
let course9  = new Course("クルーズ&バス", 2, TARGET.ADULT, "UI/course09.jpg", null, 15000, [CONTENT.WORLD_HERITAGE, CONTENT.SHOPPING, CONTENT.SIMBOL, CONTENT.PARK, CONTENT.HISTORIC]);
let course10 = new Course("ハリーポッターとシャーロックホームズ/名作のロケ地巡り", TARGET.FAMILY, "UI/course10.jpg", null, [CONTENT.SHOW, CONTENT.FILMING_LOCATION]);
let course11 = new Course("ファミリーツアー", 7, TARGET.FAMILY, "UI/course11.jpg", null, 270000, [CONTENT.SHOPPING, CONTENT.PARK, CONTENT.HISTORIC, CONTENT.INSTAGRAM]);
let course12 = new Course("3days for family", 3, TARGET.FAMILY, "UI/course12.jpg", null, 100000, [CONTENT.SHOPPING, CONTENT.PARK, CONTENT.FILMING_LOCATION]);
let course13 = new Course("2人でまったり絶景巡り", 2, TARGET.COUPLE, "UI/course13.jpg", null, 20000, [CONTENT.SIMBOL, CONTENT.INSTAGRAM]);
let course14 = new Course("3days for couple", 3, TARGET.COUPLE, "UI/course14.jpg", null, 100000, [CONTENT.WORLD_HERITAGE, CONTENT.HISTORIC, CONTENT.FILMING_LOCATION]);
let course15 = new Course("まったり博物館・美術館巡り", 7, TARGET.ADULT, "UI/course15.jpg", null, 70000, [CONTENT.WORLD_HERITAGE, CONTENT.MUSEUM, CONTENT.SIMBOL, CONTENT.HISTORIC]);
let course16 = new course("3 days for adults　（優雅）", 3, TARGET.ADULT, "UI/course16.jpg", null, 100000, [CONTENT.WORLD_HERITAGE, CONTENT.TEA_TIME, CONTENT.SHOW, CONTENT.HISTORIC]);
let course17 = new Course("shopping and theatre", 2, TARGET.FAMILY, "UI/course17.jpg", null, 15000, [CONTENT.SHOPPING, CONTENT.FASHION, CONTENT.SHOW]);
let course18 = new Course("ロンドンのおすすめ観光スポット15選！", 3, TARGET.COUPLE, "UI/course18.jpg", null, 20000, [CONTENT.SIMBOL, CONTENT.HISTORIC, CONTENT.INSTAGRAM, CONTENT.FILMING_LOCATION]);
let course19 = new Course("3 days with musical", 3, TARGET.FAMILY, "UI/course19.jpg", null, 100000, [CONTENT.SHOPPING, CONTENT.MUSEUM, CONTENT.SHOW]);
let course20 = new Course("まるまる３日間　ロンドンを歩きまわる", 3, TARGET.ADULT, "UI/course20.jpg", null, 36000, [CONTENT.SHOPPING, CONTENT.SHOW]);