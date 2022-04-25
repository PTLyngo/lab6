var labels={
    "MENU_HOME":{"vi-VN":"Trang Chủ", "en-US":"Home",},
    "MENU_ABOUT":{"vi-VN":"Giới Thiệu", "en-US":"AboutUs",},
    "MENU_COURSES":{"vi-VN":"Các Khoá Học", "en-US":"Courses",},
    "MENU_CONTACT":{"vi-VN":"Liên Hệ", "en-US":"Contact",}
};
    
var key;
  function setLang(labels) {
    localStorage.setItem(key, JSON.stringify(labels));
  }
  function getLang(labels) {
    items =
      JSON.parse(localStorage.getItem(labels));
    console.log(items);
    return items;
  }

  const vn = $("#flag-vn").attr("data-id");
  const en = $("#flag-en").attr("data-id");

  //=========================VN

  $("#flag-vn").click(function (e) {
    // e.preventDefault();
    setLang(vn);
    location.reload();
  });

  //==========================en
  $("#flag-en").click(function (e) {
    // e.preventDefault();
    setLang(en);
    location.reload();
  });

  var lang = getLang(key);

  var obj = $(".multilang");
  var obj_table = $(".multilang_table");

  for (let i = 0; i < obj.length; i++) {
    $("#" + obj[i].id ).html(labels[obj[i].id][lang]).attr("title", labels[obj[i].id][lang])
  }

  for (let i = 0; i < obj_table.length; i++) {
    $("#" + obj_table[i].id ).html(labels_table[obj_table[i].id][lang]).attr("title", labels_table[obj_table[i].id][lang])
  }

  
