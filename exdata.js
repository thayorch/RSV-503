var call = {"user":[{"nk":"แชมป์","no":1,"fb":"Champ pacharapon","ig":"none"},
                    {"nk":"เฟียต","no":2,"fb":"Pacharasorn Khumprakong","ig":"none"},
                    {"nk":"โฟกัส","no":3,"fb":"Cus Aang","ig":"Cus Aang"},
                    {"nk":"อั๋น","no":4,"fb":"Aun Ang","ig":"none"},
                    {"nk":"เฟิร์ส","no":5,"fb":"Pornpiset Wongkhuean","ig":"none"},
                    {"nk":"อัฑฒ์","no":6,"fb":"Anud Chuatrakool","ig":"autcraft"},
                    {"nk":"เฟม","no":7,"fb":"Achittaphon Sanjai","ig":"_fxme.e"},
                    {"nk":"ไอซ์(ลิง)","no":8,"fb":"Rongrot Butkaeo","ig":"RongrotT_isa"},
                    {"nk":"ฟลุ๊ค","no":9,"fb":"ฟลุ๊ค กรณพัฒน์","ig":"f.fl_uk.e"},
                    {"nk":"กล้า","no":10,"fb":"Kiro dark","ig":"none"},
                    {"nk":"เกิ้ล","no":11,"fb":"กฤตยชญ์ แก้วกัลยา ","ig":"krittay0t"},
                    {"nk":"ไอซ์(ธยอร์ช)","no":12,"fb":"Thatcharnon Maidee","ig":"__i.icez5__"},
                    {"nk":"ฟิล์ม","no":13,"fb":"Paphangkon Wongkhao","ig":"none"},
                    {"nk":"น.ไนท์","no":14,"fb":"YYasatsawinn PPanyawaii","ig":"ysswn.n1ght_"},
                    {"nk":"บอส","no":15,"fb":"Nontanan Narongrit","ig":"natnonnan.n"},
                    {"nk":"โอชิ","no":16,"fb":"Supakorn Tejakaew","ig":"none"},
                    {"nk":"แทนคุณ","no":17,"fb":"Tankoon Pratumpong","ig":"none"},
                    {"nk":"โอม","no":18,"fb":"Chotipat Chittawattananukun","ig":"o.0h_mm"},
                    {"nk":"บุ๊ค","no":19,"fb":"Sarunpat Sangpak","ig":"sarunpat.book"},
                    {"nk":"บัณฑิต","no":20,"fb":"Pataranan wongrattrikun","ig":"none"},
                    {"nk":"เจมส์","no":21,"fb":"Yuranan Fongmanee","ig":"jx_mxs"},
                    {"nk":"ตะวัน","no":22,"fb":"Tawan Nathapoom","ig":"one_plusoneequalstwo"},
                    {"nk":"จิงๆ","no":23,"fb":"Jing Jing","ig":"hongjee._"},
                    {"nk":"ซอมพอ","no":24,"fb":"Teerisara Punpasom","ig":"@teerisara___"},
                    {"nk":"ฟ้า","no":25,"fb":"wana lee","ig":"Faerjj.x"},
                    {"nk":"บูมบูม","no":26,"fb":"waraluk nammol","ig":"_bboomerang"},
                    {"nk":"วิว","no":27,"fb":"Thanaporn Sonpundi","ig":"viewezzzz"},
                    {"nk":"ครีม","no":28,"fb":"areeya mansom","ig":"Creamy.yyyyy"},
                    {"nk":"แพร","no":29,"fb":"Yaowapa Phuangpun","ig":"pw049"},
                    {"nk":"เดียร์","no":30,"fb":"Chunpiman jomjaowua","ig":"dxar._.ch"},
                    {"nk":"มาย","no":31,"fb":"Miu Mile","ig":"mojimile_"},
                    {"nk":"เอเชีย(กมลป๊อป)","no":32,"fb":"Kaakaoo Tambun ","ig":"Aussiez_497"},
                    {"nk":"ชะเอม","no":33,"fb":"Warinda Kodchasarn","ig":"kosuunwa"},
                    {"nk":"แสตมป์","no":34,"fb":"Anantaya Satam ","ig":"stzmpq3__"},
                    {"nk":"จูเนียร์","no":35,"fb":"Junior Junior ","ig":"n.unier"}]} 

                    let i = 0;
                    let c = 0;   
                for(i; i<=35; i++){
                    c = (i+1).toString();
                    console.log(i);
                    document.getElementById(`nk${c}`).innerHTML = call.user[i].nk;
                    document.getElementById(`fb${c}`).innerHTML = call.user[i].fb;
                    document.getElementById(`ig${c}`).innerHTML = call.user[i].ig;
                }   
                    

                        