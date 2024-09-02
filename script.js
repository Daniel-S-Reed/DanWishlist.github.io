var alph = true;

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}




function loadItems(){
  // Add active class to the current control button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  console.log(btnContainer);
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  let checkbox = document.getElementById("checkbox");
  checkbox.addEventListener( "change", () => {
     if (alph==true) {
       alph=false;
     }else{
       alph=true;
     }
    generateList();
    filterSelection("all")
  })
  generateList();
  filterSelection("all")
}

function OrganizeList(wishList, method){
  if (method == "Alphabetical"){
    wishList.sort(function (a,b){
      return a[2].localeCompare(b[2]);
      })
  }else if (method == "Numerical"){
    wishList.sort(function (a,b){
      return a[3] - b[3];
    })
  }
}

function generateList(){
  
  var wishList = [
    ["https://images-na.ssl-images-amazon.com/images/I/71CAKKADGZL.__AC_SX300_SY300_QL70_FMwebp_.jpg","window.open('https://www.amazon.com/ROKR-Assembly-Mechanical-Christmas-Valentines/dp/B07HDK4K1W/ref=sr_1_86?crid=3ABI0RMTTFJ76&dchild=1&keywords=wood+model+kit&qid=1597709922&sprefix=wood+moddel%2Caps%2C179&sr=8-86','_blank')","ROKR 3D Assembly Wooden Puzzle Brain Teaser Game Mechanical Gears Set Model Kit Marble Run Set Unique Craft Kits Christmas/Birthday/Valentine's Gift for Adults & Kids Age 14+(LG503-Lift Coaster)","39.99","Models MarbleRun 4"],
    ["https://images-na.ssl-images-amazon.com/images/I/61jUlt2odML.__AC_SX300_SY300_QL70_FMwebp_.jpg","window.open('https://www.amazon.com/FUZADEL-Multi-Color-Levitating-Levitation-Educational/dp/B078HXLGNQ/ref=sr_1_116?crid=22WZC0LMSITLO&dchild=1&keywords=teen+gifts&qid=1602769370&s=toys-and-games&sprefix=teen%2Caps%2C328&sr=1-116','_blank')","FUZADEL Multi-Color Changing Levitating Globe Floating Globes Magnetic Levitation Floating Globe for Home / Office Desk Decoration Ornament","19.48","OtherItems 1"],
    ["https://images-na.ssl-images-amazon.com/images/I/81gzLd1vtML.__AC_SX300_SY300_QL70_FMwebp_.jpg","window.open('https://www.amazon.com/Hasbro-Gaming-Clue-Wizarding-Exclusive/dp/B089GZQD9M/ref=sr_1_67?dchild=1&keywords=Harry+Potter&qid=1603652566&sr=8-67','_blank')","Hasbro Gaming Clue: Wizarding World Harry Potter Edition Mystery Board Game for 3-5 Players Kids Ages 8 and Up (Amazon Exclusive)","30.87","HarryPotter 3"],
    ["https://images-na.ssl-images-amazon.com/images/I/71GpEpDtM6L.__AC_SX300_SY300_QL70_FMwebp_.jpg","window.open('https://www.amazon.com/ROKR-Mechanical-Assembly-Building-Christmas/dp/B07HDKXCRD/ref=sr_1_153?dchild=1&keywords=3d+puzzles&qid=1626359257&sr=8-153','_blank')","ROKR 3D Wooden Puzzle Mechanical Gears Set DIY Assembly Model Kits Wooden Craft Kits Brain Teaser Games Building Set Best Christmas Birthday Gift for Adults & Kids Age 14+(LG502-Cog Coaster)","39.99","MarbleRun Models 4"],
    ["https://m.media-amazon.com/images/I/91mKLE9d6yL._AC_SX679_.jpg","window.open('https://www.amazon.com/iDventure-Cluebox-Captains-Nautilus-Children/dp/B09LR6JWW9?ref_=ast_sto_dp','_blank')","iDventure Cluebox - Captain's Nemo Nautilus - Escape Room Game - Cricky 3D Wooden Puzzle Puzzles - Unique Puzzle Games - Escape Box Games for Adults and Puzzle Box for Children","44.99","Puzzles,BrainTeasers 4"],
    ["https://m.media-amazon.com/images/I/71PcxuEYaJL._AC_SX679_.jpg","window.open('https://www.amazon.com/iDventure-Cluebox-Escape-Davy-Locker/dp/B09296GQ55?ref_=ast_sto_dp','_blank')","iDventure Cluebox Escape Room in a Box -Davy Jones Locker - Escape Game - Smart Wooden Puzzle - Unique Puzzle Games - Escape Box Games Adults - Puzzle Box for Kids (14+) - Brainteaser with a Secret","49.99","Puzzles,BrainTeasers 5"],
    ["https://m.media-amazon.com/images/I/715muHmAvFS._AC_SX679_.jpg","window.open('https://www.amazon.com/SHASHIBO-Shape-Shifting-Award-Winning-Extraordinary/dp/B091MF5C4W/ref=sr_1_1?crid=3406J0BA1NQDF&keywords=SHASHIBO+Shape+Shifting+Box+-+Award-Winning%2C+Patented+Fidget+Cube+w%2F+36+Rare+Earth+Magnets+-+Extraordinary+3D+Magic+Cube+%E2%80%93+Fidget+Toy+Transforms+Into+Over+70+Shapes&qid=1658953569&s=toys-and-games&sprefix=shashibo+shape+shifting+box+-+award-winning%2C+patented+fidget+cube+w%2F+36+rare+earth+magnets+-+extraordinary+3d+magic+cube+fidget+toy+transforms+into+over+70+shapes+%2Ctoys-and-games%2C96&sr=1-1','_blank')","SHASHIBO Shape Shifting Box - Award-Winning Patented Fidget Cube w/ 36 Rare Earth Magnets - Extraordinary 3D Magic Cube – Fidget Toy Transforms Into Over 70 Shapes (Moon - Explorer Series)","25.00","OtherItems 2"],
    ["https://m.media-amazon.com/images/I/61YiRjqdhTL._AC_SX679_.jpg","window.open('https://www.amazon.com/Ugears-Self-Propelled-Model-Rails/dp/B017I15WNI?ref_=ast_sto_dp','_blank')","Ugears Tram with Rails - 3D Puzzle Self Propelled Mechanical Wooden Model","44.99","Models 4"],
    ["https://images-na.ssl-images-amazon.com/images/I/71hP52TiuqL.__AC_SX300_SY300_QL70_FMwebp_.jpg","window.open('https://www.amazon.com/Ravensburger-Statue-Liberty-Jigsaw-Puzzle/dp/B01D24NU5M?ref_=ast_sto_dp&th=1&psc=1','_blank')","Ravensburger Statue of Liberty Night Edition 108 Piece 3D Jigsaw Puzzle for Kids and Adults - Easy Click Technology Means Pieces Fit Together Perfectly , Brown","22.39","Puzzles Models 2"]
    ,["https://m.media-amazon.com/images/I/81zU1a5LsjL._AC_SX569_.jpg","window.open('https://www.amazon.com/UGEARS-Wooden-Marble-Run-Kit/dp/B09F3GPSNQ?ref_=ast_sto_dp','_blank')","UGEARS Wooden Marble Run Kit - 3D Puzzle Wood Marble Run Stepped Hoist with 3-Stepped Lift Mechanism and 10 Marbles - Kinetic DIY Marble Run Wooden Puzzle - 3D Wooden Puzzles for Adults and Kids","57.99","Models MarbleRun 5"]
    ,["https://m.media-amazon.com/images/I/810pj5yKHIL._AC_SX569_.jpg","window.open('https://www.amazon.com/UGEARS-Marble-Tiered-Hoist-Self-Assembly/dp/B0B136K2MJ?ref_=ast_sto_dp','_blank')","UGEARS Marble Run Tiered Hoist - Wooden Marble Run Kit with 10 Colored Marbles - 3D Puzzles for Adults and Kids - Amusement Park Wood Marble Track 3D Puzzle - Wood Model Kit for Self-Assembly","54.99","Models MarbleRun 5"]
    ,["https://m.media-amazon.com/images/I/71Fk+IAkwvL._AC_SX569_.jpg","window.open('https://www.amazon.com/iDventure-Cluebox-Escape-Room-Box/dp/B09X4GXHPL?ref_=ast_sto_dp','_blank')","iDventure Cluebox Escape Room in a Box - The Trial of Camelot - Escape Game - Puzzle box - Smart wooden puzzle - Unique puzzle games - Escape Box games adults - Puzzle box for teens(15+) - Brainteaser","49.99","BrainTeasers 5"] 
    ,["https://m.media-amazon.com/images/I/81zfXzwdZ-L._AC_SX679_.jpg","window.open('https://www.amazon.com/RoWood-Puzzles-Mechanical-Christmas-Birthday/dp/B094CQR5SL?ref_=ast_sto_dp','_blank')","RoWood 3D Puzzles for Adults, Model Kits for Adults to Build, Wooden Town Christmas Birthday Gifts for Teens- Marble Night City","56.99","MarbleRun Model Puzzles 5"]
    ,["https://m.media-amazon.com/images/I/815TC6ZXxML._AC_SX679_.jpg","window.open('https://www.amazon.com/UGEARS-NASA-Space-Shuttle-Discovery/dp/B0CCVP87G9?ref_=ast_sto_dp','_blank')","UGEARS NASA Space Shuttle Discovery - Wooden Models to Build for Adults - Space Shuttle Model Kit - Mechanical 3D Puzzle Wooden Model Kit for Adults - Spacecraft Model with Detailed Features","59.99","Models Puzzles 6+"]
    ,["https://m.media-amazon.com/images/I/91oG2xVAEAL._AC_SX679_.jpg","window.open('https://amazon.com/Wood-Trick-Marble-Run-Spiral/dp/B0BS6WCRGW?ref_=ast_sto_dp','_blank')","Wood Trick Wooden Marble Run Spiral Wooden 3D Puzzles for Adults and Kids to Build - 13x13 - Electric Driven - Roller Coaster Mechanical Wooden Model Kits for Adults and Teens to Build","89.90","MarbleRun Models 6+"]
    ,["https://m.media-amazon.com/images/I/81YU8-aZcDL._AC_SX569_.jpg","window.open('https://www.amazon.com/Wood-Trick-Modern-Kinetic-Clock/dp/B0BP7P97HV?ref_=ast_sto_dp&th=1','_blank')","Wood Trick Modern Kinetic Clock 3D Wooden Puzzles for Adults and Kids to Build - Magic Mechanism Aesthetic Design - Model Kits for Adults - Engineering DIY Wooden Models for Adults to Build","99.90","Models Puzzles 6+"]
    ,["https://m.media-amazon.com/images/I/81GxZk-G59L._AC_SX569_.jpg","window.open('https://www.amazon.com/Wood-Trick-Dragon-Castle-Moveable/dp/B0C8ZM5BLT?ref_=ast_sto_dp','_blank')","Wood Trick Dragon Castle Moveable Wooden 3D Puzzles for Adults and Kids to Build - Red LED - Greensleeves Melody - Towers Rotating - Engineering DIY Project Mechanical Model Kits for Adults","139.90","Models 6+"]
    ,["https://m.media-amazon.com/images/I/81TkMKiO4kL._AC_SX466_.jpg","window.open('https://www.amazon.com/Harry-Potter-Hogwarts-Magical-Control/dp/B09XN5SQ9R/ref=sr_1_2_sspa?crid=BH9QMSRBUILL&keywords=harry+potter+room+decor&qid=1700767054&sprefix=harry+potterroom+de%2Caps%2C87&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1','_blank')","Paladone Harry Potter Hogwarts Crest Light Sign with Magical Wand Remote Control, Wall Mountable or Free Standing Room Decor, Officially Licensed Gifts for Harry Potter Fans","42.99","HarryPotter 4"]
    ,["https://m.media-amazon.com/images/I/61AhXeeXEuL._AC_SX569_.jpg","window.open('https://www.amazon.com/Paladone-11780-Golden-Snitch-Holographic/dp/B0BRYV24W2/ref=sr_1_4_sspa?crid=BH9QMSRBUILL&keywords=harry%2Bpotter%2Broom%2Bdecor&qid=1700767054&sprefix=harry%2Bpotterroom%2Bde%2Caps%2C87&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1','_blank')","Paladone Golden Snitch Holographic Light, 3D Laser-Etched Crystal Model, Collectible Quidditch Lamp and Desk Accessories Decor for Harry Potter Fans","23.99","HarryPotter 2"]
    ,["https://m.media-amazon.com/images/I/81mOSE7gMkL._AC_SX679_.jpg","window.open('https://www.amazon.com/YOOEI-Illusion-Bedside-Changes-Creative/dp/B0BXLC7H6J/ref=sr_1_173?crid=BH9QMSRBUILL&keywords=harry+potter+room+decor&qid=1700767533&sprefix=harry+potterroom+de%2Caps%2C87&sr=8-173','_blank')","YOOEI 3D Illusion Night Light for Kids Magic Castle Bedside Lamp 16 Colors Changes with Remote Control, Room Decor, Creative Gifts for Boys or Kids","12.99","HarryPotter 1"]
    ,["https://m.media-amazon.com/images/I/91LbaaRC-kL._AC_SX679_.jpg","window.open('https://www.amazon.com/ESC-WELT-Quest-Tower-Eco-Friendly/dp/B0CCDHVYFG/ref=sr_1_7?crid=3B2HMU2G7OHF6&keywords=brain+teaser+escape+room&qid=1700789418&sprefix=brain+teaser+escape+room%2Caps%2C78&sr=8-7','_blank')","ESC WELT Quest Tower - 3D Escape Game Puzzle Box - Brain Teaser Puzzle for Adults & Teens - Eco-Friendly Wooden Escape Room Game - Mind Puzzle Game with Hidden Compartment - Family Games Puzzle","54.89","BrainTeasers Puzzles 5"]
    ,["https://m.media-amazon.com/images/I/71n1XhzTjyL._AC_SX679_.jpg","window.open('https://www.amazon.com/ESC-WELT-Fort-Knox-Puzzle/dp/B0BLCD3FQY?ref_=ast_sto_dp&th=1','_blank')","ESC WELT Fort Knox Box PRO 3D Puzzle Game - 3-in-1 Wooden Puzzle Box Game - Brainteaser - Gift Box Riddle Game - Puzzle Box for Children and Adults - Mind Puzzle 3D Wooden Puzzle - Escape Room Game","35.89","Puzzles BrainTeasers 3"]
    ,["https://m.media-amazon.com/images/I/91TS5LJyQDL._AC_SX679_.jpg","window.open('https://www.amazon.com/Wooden-City-Treasure-Compartments-Cluebox-Teasers/dp/B0CK2PSMTM/ref=sr_1_55?crid=3B2HMU2G7OHF6&keywords=brain%2Bteaser%2Bescape%2Broom&qid=1700789418&sprefix=brain%2Bteaser%2Bescape%2Broom%2Caps%2C78&sr=8-55&th=1','_blank')","Wooden.City Puzzle Box Treasure Chest | Escape Puzzle | Puzzle Boxes with Hidden Compartments | Cluebox | Puzzle Brain Teasers for Adults | Pirates Puzzle Box","39.90","BrainTeasers Puzzles 4"]
    ,["https://m.media-amazon.com/images/I/81Wok0bJfxL._AC_SX466_.jpg","window.open('https://www.amazon.com/Greenroledulfcc-Change-Control-Birthday-Friends/dp/B0C7KNY4CZ/ref=sr_1_18?crid=3TXNDCYA1SMQ0&keywords=harry%2Bpotter%2B3d%2Blight&qid=1700791465&sprefix=harry%2Bpotter%2B3d%2Blight%2Caps%2C103&sr=8-18&th=1','_blank')","Greenroledulfcc 5 in 1 Sets Magic Theme 3D Cute Night Light, 16 Color Change with Remote Control Lamp, Birthday Xmas Gifts for Kids Boys Girls Teens Friends","13.99","HarryPotter 1"]
    ,["https://m.media-amazon.com/images/I/81H7WeHtwPL._AC_SX679_.jpg","window.open('https://www.amazon.com/Crystal-Birthday-Teacher-Girlfriend-Classmates/dp/B09WDM4LBX/ref=sr_1_244_sspa?crid=1WUC5YPE7CUFI&dib=eyJ2IjoiMSJ9.Sv_uQYTEOa3YJQxqgHaEMU3jEye_99YDGDxIxm-QWacJsFgxMj-bK16hfsMuLquU6i0VZq4Mk18AoBzuETFx3iNckcIRm6vL4tJnXRNgSLpqHnuTMieMwcQ65UAEAYJdC31dkSqUHfagqJPHEifD9zi5x-nmCYdoNlGqkojKuLgEQiyHZn1ZeTqcwAywss6eKsE-Md7Z-HEYrnRdVgYdksgDdDZxekSeGGyWGlRiCqQFoog9E6cuUP8Xo8CkFqRSgGjh0APRy3p_CgixmwmKMutUPabKeJItzqWrAXRhLoM.919SDtUi-sd24BmNn1qaV53B_btUoPA1-FEWrNE3kCI&dib_tag=se&keywords=gifts%2Bfor%2Bcollege%2Bboys&qid=1722098815&sprefix=gifts%2Bfor%2Bcollege%2Caps%2C92&sr=8-244-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1','_blank')","3D Crystal Ball with Solar System Model and LED lamp Base, Clear 80mm (3.15 inch), Best Birthday Girlfriend Gift, Teacher of Physics, Classmates and Kids Gift","35.71","New Models other 3"]
    ,["https://m.media-amazon.com/images/I/71LdoJBiwfL._AC_SX466_.jpg","window.open('https://www.amazon.com/Rocketbook-Everlast-Fusion-Reusable-Notebook/dp/B07RTN4F7D?ref_=ast_sto_dp&th=1','_blank')","Rocketbook Core Reusable Smart Notebook | Innovative, Eco-Friendly, Digitally Connected Notebook with Cloud Sharing Capabilities | Dotted, 8.5 x 11, 32 Pg, Midnight Blue, with Pen, Cloth, and App Included","26.25","New Other 2"]
    ,["https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C91l9OPy-CPL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466_.png","window.open('https://www.amazon.com/Harry-Potter-Patronus-Dementor-Silhouette/dp/B08KGXSZ1Q/ref=sr_1_3?crid=278KEVMZWL7W7&dib=eyJ2IjoiMSJ9.yq6Dv6oEmxPOO1-M3zaMH-exVlfDz-vbHp4o9ca2NNCDfYyLd13kFRWLaJ_Ke05uD4BRwH0_WR3xAku1Ep32HWupfg7sGE4z3cAtINbv5sVphuFfhLol0cZFQw9y1cxRSBz23VXQhD_fRqeZCQ0h9HlxWk4ag1tmxY8sMSWvgzTJYA8NvC9AKiHFZxzOqg9gR9AitK7Fv_MyxystrcFb5gnAZznUFXZUdtqCdTSL_MFRZI_olrUn839VUMmBHUo_QQI_Q5jrkU97TbUiklTFZwuSMy5-7h58Lf_TAuKjssE.IDYgFjivqXOKIWubW8BgtoxZn13wYvocZZAjTTgx1Zs&dib_tag=se&keywords=harry%2Bpotter%2Bt-shirt%2Bdementor%2Band%2Bpatronus&qid=1722006997&sprefix=harry%2Bpotter%2Bt-shirt%2Bdementor%2Band%2Bpotronus%2Caps%2C143&sr=8-3&customId=B07535Y9T6&customizationToken=MC_Assembly_1%23B07535Y9T6&th=1&psc=1','_blank')","Harry Potter Patronus Dementor Silhouette T-Shirt","22.99","New Other HarryPotter 2"]
    ,["https://m.media-amazon.com/images/I/7158c6FuMsL._AC_SX679_.jpg","window.open('https://www.amazon.com/Puzzles-Building-Desktop-Decoration-Creative/dp/B0CQF6TDJD/ref=sr_1_292_sspa?crid=3SNUHCXM3V6N6&dib=eyJ2IjoiMSJ9.TdjGyNeVJBQ4nvAq6ZKLA_VjTB6NxZmlY9DzoyXKIXkuPw2FOpuDrFwLZTtNHUodNUuoImy48ltUBr7DYE6XIxbbvN-kVhBGnmsPYMuN2iVRXrhhJbmu2UsbkWMOze37ssgw48mQH_w_oz695evAj2VGkTO3YOTkev1r_DiKzhe6stp8whnbZTESu_6AfoGO.vWj9jDfcc1aL0nCQ3x37H_bqlhu9MFz3HA9HS8_MCAc&dib_tag=se&keywords=wooden%2Bmodels&qid=1722009477&sprefix=wooden%2Bmodels%2Caps%2C148&sr=8-292-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1','_blank')","3D Wooden Puzzles for adults wooden music box kits Guitar Building model Desktop Decoration DIY3D Puzzle Toys to Creative Gifts for Teens and Adults","23.99","New Models Guitar 2"]
    ,["https://m.media-amazon.com/images/I/61Ag0n8J1xL._AC_SX466_.jpg","window.open('https://www.amazon.com/dp/B08QCMV5XG/ref=sspa_dk_hqp_detail_aax_0?psc=1&sp_csd=d2lkZ2V0TmFtZT1zcF9ocXBfc2hhcmVk','_blank')","3D Guitar Paperweight Laser Etched in Crystal Glass Cube For Graduation Christmas Birthday Valentine's day","18.99","New Other Models Guitar 1"]
    ,["https://m.media-amazon.com/images/I/716wxyl+ofL._AC_SX679_.jpg","window.open('https://www.amazon.com/Figurines-Collectibles-Sculpture-Paperweight-Champagne/dp/B0BBM12PZS/ref=pd_ci_mcx_di_int_sccai_cn_d_sccl_2_3/134-7123695-3829942?pd_rd_w=vE1xA&content-id=amzn1.sym.751acc83-5c05-42d0-a15e-303622651e1e&pf_rd_p=751acc83-5c05-42d0-a15e-303622651e1e&pf_rd_r=TASB5NV5T82XTE9EFQNV&pd_rd_wg=cJg9H&pd_rd_r=741d86e0-f124-4135-a79d-251ea421ed84&pd_rd_i=B0BBM12PZS&th=1','_blank')","QFkris 6'' Crystal Guitar Figurines Collectibles Blown Glass Art Musical Sculpture Statue Paperweight with Base Home Table Decor (Champagne)","19.99","New Other Model Guitar 2"]
    ,["https://m.media-amazon.com/images/I/71RpRKriwzL._AC_SX679_.jpg","window.open('https://www.amazon.com/Auto-LED-Glowing-Guitar-Picks/dp/B0CY3LBSL3/ref=sr_1_13_sspa?crid=TJ0JJVM6A55J&dib=eyJ2IjoiMSJ9.sjYOAyKh97TiK0xci333NCJW05-PfTmXYiAZF9pxJwAOAmzPyU8anooawdN1-jrOQCgigmV-5NNx536hqghKmB8kaHc8zhegsckwQo4Ruowia8RSqp6p7iodZ5Ju_du-VEvaj_FQWwjEK5vcOOuUgdJv821W4cKDXWOxT0FgIbFt3RrxOnOr_rjr-6nnLGPzE3Lre2znyP1ytvcWn3xlzqOIbseOJSopXPFwpUEk7XBoYsAkXSES6L3qo3il3EMfN-mleJ_-MOgAnohjGniad33dNB-lIARoLHrAuLIbfPg.7nhsPYa-k8fy3w7LrvsXuBLzbSEDR5pOZXhUtjLxOw0&dib_tag=se&keywords=gifts%2Bfor%2Bguitarists&qid=1722009915&sprefix=gifts%2Bfor%2Bguitarists%2Caps%2C86&sr=8-13-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1','_blank')","Auto LED Glowing Guitar Picks - Light up Guitar Pick, for Unmatched Musical Experience, 0.6mm (White)","9.99","New Other Guitar 1"]
    ,["https://m.media-amazon.com/images/I/51sBYY6WL9L._AC_SX679_.jpg","window.open('https://www.amazon.com/dp/B0CQXHB1H6/ref=sspa_dk_hqp_detail_aax_0?psc=1&sp_csd=d2lkZ2V0TmFtZT1zcF9ocXBfc2hhcmVk','_blank')","Auto LED Glowing Guitar Picks, 3 pcs Light up Plectrum with Durable Thick Protecting Ending Decorative Rope for DIY Craft (white)","9.99","New Guitar Other 1"]
    ,["https://m.media-amazon.com/images/I/71IcWjlmPTL._AC_SX679_.jpg","window.open('https://www.amazon.com/Illusion-Changing-Instrument-Decoration-Valentines/dp/B07M88927T/ref=sr_1_49_sspa?crid=TJ0JJVM6A55J&dib=eyJ2IjoiMSJ9.Y58-l3HLOxxLX0K_XsUXten-Wt-679f8qRAIlXPEqt4MVE-DH5o_8aQUxwy5RJeCjy5X_ERPwCgtEhshGW8P0tPBS4d2iCuedSxT-9slqoo8MQBTzjkmtyQSWfn0Z_8bbavzzxBCGGlxjUdXiX8KRb-yaRb0Y2T9uMDZ2mWviFzFgQL6V63XF_swPEaZXsAlUt9v7bTig9fcgiYNVR0pKnioLyNqSEmvxzAERGJ1v9UWrE3i4EG13VV2eh3xRRgKIRgVbeTgMSX0X1xAe_ssrDSk0E4XVJ7Mo-OiE5oiz6k.dbT6B_f3QwQlFrksqwYj0DINWPC6bvaNpGycanjtVfA&dib_tag=se&keywords=gifts+for+guitarists&qid=1722010285&sprefix=gifts+for+guitarists%2Caps%2C86&sr=8-49-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1','_blank')","3D Night Light Guitar Gifts for Music Lover, 3D Illusion Lamp with Remote Control &16 Colors Changing Amazing Idea Choice for Musical Instrument Shop Home Party Supply Decoration Xmas Valentine's Day","17.99","New Guitar 1"]
    ,["https://m.media-amazon.com/images/I/61cfpDjfaGL._AC_SX679_.jpg","window.open('https://www.amazon.com/Graphics-More-Gryffindor-Automotive-Refrigerator/dp/B07VJ3HBG3/ref=sr_1_17_sspa?crid=WIPREZPX7IVN&dib=eyJ2IjoiMSJ9.LnV9CsmRAtfyfM5Lku9SCiHz0CBaOXF_XKKnJFFGOPAHYLuDSM66l9jS3d80Pw7DK9Udcb57JZkKv4Ryu4JUz1IkyqExDMsLmlSW0aJxs_X3GEU05jafL9WM7AZVhu8tt8xH3-RDnkoBL1KWKMbEYLyHdFqVlwW9Hyr5kxI-RJctmH3vx3lD3K1ngZ06zrzxTVA9vHIzlh4g9GkAdg0m0vHEVv8iK2qNwZPk50pzmiCGz9i_c0-3Op7BG5i1MQSxz9WrAB-mG8VLOXmhVMrEVIouTcZEYyvQ7jDUed3C7O4.9RvaFTPvzQEcwAoL1cHrnsk-cb7nhKup80Kp1P3gYx4&dib_tag=se&keywords=harry+potter+car+magnets&qid=1722005888&sprefix=harry+potter+car+magnets%2Caps%2C185&sr=8-17-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1','_blank')","Harry Potter Gryffindor Painted Crest Automotive Car Refrigerator Locker Vinyl Circle Magnet","8.99","New HarryPotter Other 0"]
    ,["https://m.media-amazon.com/images/I/61buyx1j3oL._AC_SX679_.jpg","window.open('https://www.amazon.com/Graphics-More-Gryffindor-Automotive-Refrigerator/dp/B07VLT5RKM/ref=sr_1_56?crid=WIPREZPX7IVN&dib=eyJ2IjoiMSJ9.ko_YY5QchsgrcXKZkFf00rNT1Z8lvssQutr6MbcB6WopUhpmKCK4gSxRF7VzNzabYjQ-nO4wPcvT633ErKAmiuAAWTJyW9idmKxIIFSxmJU.BLlsqKjPkqO2J2GiMy1p52wWMcS7KfrUaK8ZswSRxWU&dib_tag=se&keywords=harry%2Bpotter%2Bcar%2Bmagnets&qid=1722006278&sprefix=harry%2Bpotter%2Bcar%2Bmagnets%2Caps%2C185&sr=8-56&th=1','_blank')","Harry Potter Gryffindor Plaid Sigil Automotive Car Refrigerator Locker Vinyl Euro Oval Magnet","8.99","New Other HarryPotter 0"]
    ,["https://m.media-amazon.com/images/I/51YvPuBn+VL._AC_SX679_.jpg","window.open('https://www.amazon.com/Graphics-More-Gryffindor-Automotive-Refrigerator/dp/B07WJY58B2?ref_=ast_sto_dp&th=1','_blank')","Harry Potter Gryffindor Alumni Automotive Car Refrigerator Locker Vinyl Euro Oval Magnet","9.99","New Other HarryPotter 1"]
    ,["https://m.media-amazon.com/images/I/91pVYDtpO5L._AC_SX679_.jpg","window.open('https://www.amazon.com/iDventure-Cluebox-PRO-Sherlocks-sequential/dp/B0C8ZFY756?ref_=ast_sto_dp','_blank')","iDventure Cluebox PRO - Sherlock's Camera - Escape Room game - sequential Puzzle box - 3D wooden puzzle for adults - brain teaser - birthday gift gadget for men and women - money box","54.99","Puzzles New BrainTeasers 5"]
    ,["https://m.media-amazon.com/images/I/71tLe2DhsAL._AC_SX679_.jpg","window.open('https://www.amazon.com/iDventure-Maze-ing-Safe-Packaging-Birthday/dp/B0C8ZHB6V7?ref_=ast_sto_dp','_blank')","iDventure A-maze-ing Safe - Marble Run Money Puzzle box - Tricky gift packaging - 3D puzzle for adults - Escape Room game - brain teaser - birthday gift gadget for men and women - treasure box","27.00","New Puzzle BrainTeasers 2"]
    ,["https://m.media-amazon.com/images/I/71BgtgS-NtL._AC_SX679_.jpg","window.open('https://www.amazon.com/INSCAPE-Maya-Puzzle-Box-Compartments/dp/B0C5D5DVX3/ref=sr_1_4?dib=eyJ2IjoiMSJ9.BaMD5Jrd3zIpHy4WpSFzSZ0V95zz299aZ5lCvq1kYSOhG48lxpFkEP_YgJpaz1_8BZ_m0qcncKmmaI3U7DtrWX0HVBo6Ka-qToZqosm_8qztJ-Ko2kZw7gRHX6KQILU8JBcYh1R1WwmlFTOOrsZ3DVmYtPtZJ8ahPitqOLD4zAvNXL6GBB9jKvnxWvFMAsvdFMFBGehee28oLZ2LwDO4T0m5KPu9oPmeypyBDpA3MsZVlSjkY4KNsHpXmOMJNe3yOwQ5gmk8mEhgsrzvG0hx6YZeT2dr8wlQdl_kqfvI82o.8EoBlZe5JEc8mHhcwB0rjtxnVu3g9JtezcwN9XpRvXM&dib_tag=se&keywords=brain%2Bteaser%2Bescape%2Broom&qid=1722292199&sr=8-4','_blank')","INSCAPE Maya´s Myths - Puzzle Box - Escape Room in A Box - Cluebox - Gift Puzzle Boxes for Adults with Hidden Compartments - Escape Room Puzzles Escape Room Game - Brain Teasers Puzzles for Adults","64.90","New Puzzle BrainTeasers 6+"]
    ,["https://m.media-amazon.com/images/I/81q8uM-C6NL._AC_SX679_.jpg","window.open('https://www.amazon.com/ESC-WELT-Quest-Ball-Secret/dp/B0D2XKJBFV/ref=sr_1_13?dib=eyJ2IjoiMSJ9.BaMD5Jrd3zIpHy4WpSFzSZ0V95zz299aZ5lCvq1kYSOhG48lxpFkEP_YgJpaz1_8BZ_m0qcncKmmaI3U7DtrWX0HVBo6Ka-qToZqosm_8qztJ-Ko2kZw7gRHX6KQILU8JBcYh1R1WwmlFTOOrsZ3DVmYtPtZJ8ahPitqOLD4zAvNXL6GBB9jKvnxWvFMAsvdFMFBGehee28oLZ2LwDO4T0m5KPu9oPmeypyBDpA3MsZVlSjkY4KNsHpXmOMJNe3yOwQ5gmk8mEhgsrzvG0hx6YZeT2dr8wlQdl_kqfvI82o.8EoBlZe5JEc8mHhcwB0rjtxnVu3g9JtezcwN9XpRvXM&dib_tag=se&keywords=brain%2Bteaser%2Bescape%2Broom&qid=1722292199&sr=8-13','_blank')","ESC WELT Quest Ball Secret Box - 3D Escape Room Game - Wooden Brain Teaser for Adults & Teens - Ingenious Puzzle with Hidden Compartment - Interactive Family Game","37.98","New Puzzle BrainTeasers 3"]
    ,["https://m.media-amazon.com/images/I/61DxdnbnK7L.__AC_SX300_SY300_QL70_FMwebp_.jpg","window.open('https://www.amazon.com/INSCAPE-Ancient-Rome-Puzzle-Box/dp/B0BQ72VHGH?ref_=ast_sto_dp','_blank')","INSCAPE Caesar´s Riches Puzzle Box - Escape Room in A Box for Adults - Cluebox - Mind Puzzles for Adults - Puzzle Boxes with Hidden Compartments - Puzzle Boxes for Adults - Wooden Puzzle Box","59.90","New Puzzle BrainTeasers 6+"]
    ,["https://m.media-amazon.com/images/I/91PXpve0w7L._AC_SX679_.jpg","window.open('https://www.amazon.com/ESC-WELT-Blackbeards-Compass-Puzzle/dp/B0CV7BKZTZ/ref=sr_1_42?dib=eyJ2IjoiMSJ9.BaMD5Jrd3zIpHy4WpSFzSZ0V95zz299aZ5lCvq1kYSOhG48lxpFkEP_YgJpaz1_8BZ_m0qcncKmmaI3U7DtrWX0HVBo6Ka-qToZqosm_8qztJ-Ko2kZw7gRHX6KQILU8JBcYh1R1WwmlFTOOrsZ3DVmYtPtZJ8ahPitqOLD4zAvNXL6GBB9jKvnxWvFMAsvdFMFBGehee28oLZ2LwDO4T0m5KPu9oPmeypyBDpA3MsZVlSjkY4KNsHpXmOMJNe3yOwQ5gmk8mEhgsrzvG0hx6YZeT2dr8wlQdl_kqfvI82o.8EoBlZe5JEc8mHhcwB0rjtxnVu3g9JtezcwN9XpRvXM&dib_tag=se&keywords=brain%2Bteaser%2Bescape%2Broom&qid=1722292199&sr=8-42','_blank')","ESC WELT Blackbeard's Compass Puzzle Box - Escape Room in a Box - Brainteaser - 3D Escape Game Money Box - Gift Box Riddle Game - Puzzle Box - Wooden Puzzle Box for Family Games - Gift Box Puzzle Game","44.89","New Puzzle BrainTeasers 4"]
    ,["https://m.media-amazon.com/images/I/91DzowPJQNL._AC_SX679_.jpg","window.open('https://www.amazon.com/Wood-Trick-Enigma-Chest-Puzzles/dp/B0CCF6RB1F?ref_=ast_sto_dp','_blank')","Wood Trick Enigma Chest Lock Puzzle Box Wooden 3D Puzzles for Adults and Kids to Build - Engineering DIY Project Mechanical Model Kits for Adults Wooden Models","69.95","new Puzzle BrainTeasers 6+"]
    ,["https://m.media-amazon.com/images/I/614UkiTovmL._AC_SX679_.jpg","window.open('https://www.amazon.com/STONESTAR-Magnetic-3-Layer-Sensory-Relieve/dp/B0CJY5XP1H/ref=sr_1_98_sspa?crid=T8I9T4TBK2JA&dib=eyJ2IjoiMSJ9.4ATPCaMZtRTgQbqCs9FJ5O0bpMpA1-z6oMwSQxz9Wn0oRKZVwuGNg2fJcPL5qPW5iNGNZBgtk2hDi6gyF-0IL_CW5CYUg0i2K7TW4etDAH3IqSL-Hd2ce5oW9XnXgIDyRzA0ewX5mdchqeWwcEH6W_PN6IXCN9A-Bbq2yLLzk1l69ssTK6z3jRFGBEI01GbCdObHWLseAG7GzU4ORcXQDaQdlt5wGbz3wpy_8E493TjnDS7xnnjniaj44UR3TmwAb3o1s5xo5Bbz8uzJ7tvvZiCTCvwhsKJfKbblm33PpTI.j_gPp2TEbqOH3BIH-GN1XTkmWIbOCUbYNZ9IKAGsxqM&dib_tag=se&keywords=fidget%2Btoys&qid=1722373234&sprefix=fidget%2Btoys%2Caps%2C836&sr=8-98-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1','_blank')","STONESTAR Mecha Fidget Slider, Glow-in-The-Dark Magnetic Metal Fidget Toys, 3-Layer Push Card Sensory toys EDC Fidget Toy for Adults, Helps Relieve ADHD/Anxiety/Stress (Green Light)","29.99","New Other 3"]
    ,["https://m.media-amazon.com/images/I/81e7Y4lF0NL._AC_SX679_.jpg","window.open('https://www.amazon.com/Generic-Blankets-Lightweight-Christmas-Birthday/dp/B0D3D5HL6V/ref=sr_1_21_sspa?crid=2MLD981KBILU&dib=eyJ2IjoiMSJ9.I5gz86P-nRwCb5vBFPky8WQySIza9OdzpsAtFYt4JSMZqmOXK6MtSGwoI4mBjICLqkn021Z1iW6rh4wxYbY5SPK8COK-6vhhQ5ZSu4f6qVpEV7YiQJG-tVaxvI8Oddojr4UGhTBmOfSFEXNHm2WehC4SnIRug0siW_7UmKis1SwW0eT5UhmUpFxbpnNdyvhUFeGpTuzlDdPy0KfktdNqlZPbp4Ie80U0hFvvd39IqhP5xX5EYstr9DW_msvsNfBYr9rEvgXZjrvh-ECun7lxVOt-zxaiAWb6J4ta6Yj24Vo.4S1tO9Pwsr7k9Hb-O0-bGkKdrsVQCdXc3YQljeoAEPA&dib_tag=se&keywords=harry%2Bpotter%2Bblanket&qid=1722878265&sprefix=harry%2Bpotter%2Bblanke%2Caps%2C184&sr=8-21-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1','_blank')","Anime Blanket Cute Throw Blankets for Kawaii Girls Brown Super Soft Lightweight Cozy Plush for Picnic Travel Couch Bed Sofa Decor for Teen Women Christmas Birthday Gifts 50 * 60","32.99","HarryPotter New Other"]
  ];
  console.log(document.getElementById("container").outerHTML==null);
  if (alph==true){
    OrganizeList(wishList, "Alphabetical");
    console.log("organized!");
  }else{
    OrganizeList(wishList, "Numerical");
    console.log("numerized!");
    console.log(wishList);
  }
  var ReturnHTML = "";
  for (let x = 0; x <wishList.length; x++){
    if(wishList[x][1] == null){
      ReturnHTML+="<div class = 'filterDiv " +wishList[x][4]+"'> <img src='"+wishList[x][0]+"' class = 'hoverImage'></image><button class = 'filterButton' onclick = "+wishList[x][1]+">"+wishList[x][2]+"<br>"+wishList[x][3] +"</button></div>";
    }else{
      ReturnHTML+="<div class = 'filterDiv " +wishList[x][4]+"'> <img src='"+wishList[x][0]+"' class = 'hoverImage'></img><button class = 'filterButton' onclick = "+wishList[x][1]+">"+wishList[x][2]+"<br>"+wishList[x][3] +"</button></div>";
    }
  }
  document.getElementById("container").innerHTML = ReturnHTML;
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (mybutton==null){
    mybutton = document.getElementById("myBtn");
    console.log(mybutton);
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
