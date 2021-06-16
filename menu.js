var telas = ["menu"];
var larguraJogo = 1280;
var alturaJogo = 720;

function menu() {
	
	var botao1, botao2;
	var fundo;
	var botaoPodeClicar, telaAtual, telaDepoisDoFadeOut;
	
	var telas = [
		
		"menu.jpg",   // menu (0)
		"1.1.jpg",   // 1.1    (1)
		"1.2.jpg",   // 1.2    (2)
		"1.3.jpg",   // 1.3    (3)
		"1.4.jpg",   // 1.4    (4)
		"1.5.jpg",	// 1.5     (5)
		"1.5.2.jpg",	// 1.5.2     (6)
		"1.6.jpg",  // 1.6     (7)
		"1.6.2.jpg",  // 1.6.2     (8)
		"1.7.jpg",   // 1.7    (9)
		"1.7.2.jpg",   // 1.7.2   (10)
		"1.7.3.jpg",   // 1.7.3    (11)
		"1.7.4.jpg",   // 1.7.4    (12)
		"1.8.jpg",  // 1.8     (13)
		"1.8.2.jpg",  // 1.8.2    (14)
		"1.8.3.jpg",  // 1.8.3    (15)
		"1.8.4.jpg",  // 1.8.4     (16)
		"1.9.jpg",   // 1.9    (17)
		"1.9.2.jpg",   // 1.9.2    (18)
		"1.9.3.jpg",   // 1.9.3    (19)
		"1.9.4.jpg",   // 1.9.4   (20)
		"1.10.jpg",  // 1.10   (21)
		"1.10.2.jpg",  // 1.10.2   (22)
		"1.11.jpg",   // 1.11  (23)
		"1.11.2.jpg",   // 1.11.2  (24)
		"2.0.jpg", // 2.0      (25)
		"2.1.jpg",// 2.1       (26)
		"2.2.jpg",   // 2.2    (27)
		"2.3.jpg",   // 2.3    (28)
		"2.4.jpg",   // 2.4    (29)
		"2.5.jpg",  // 2.5     (30)
		"2.6.jpg",  // 2.6     (31)
		"2.7.jpg",  // 2.7     (32)
		"2.8.jpg",	 // 2.8    (33)
		"2.9.jpg",	 //2.9     (34)
		"2.10.jpg", //2.10     (35)
		"2.13.jpg" , //2.13    (36)
		"2.14.jpg" ,  //2.14   (37)
		"2.15.jpg",  //2.15    (38)
		"2.16.jpg",	 //2.16    (39)
		"2.17.jpg",	//2.17     (40)
		"2.18.jpg",	 //2.18    (41)
		"2.19.jpg",	 //2.19    (42)
		"2.20.jpg",   //2.20   (43)
		"2.22.jpg",   //2.22   (44)
		"3.1.jpg",	//3.1      (45)
		"3.2.jpg",	//3.2      (46)
		"3.3.jpg",	//3.3      (47)
		"3.4.jpg",	  // 3.4   (48)
		"3.5.jpg", //3.5       (49)
		"3.6.jpg",   //3.6     (50)
		"3.6.1.jpg",	//3.6.1   (51)
		"3.7.jpg",	  //3.7      (52)
		"3.8.jpg",	  //3.8      (53)
		"3.8.2.jpg",	   //3.8.2   (54)
		"3.9.jpg",	  //3.9      (55)
		"3.10.jpg",  //3.10  (56)
		"3.11.jpg",	  //3.11    (57)
		"3.12.jpg",	//3.12  (58)
		"3.13.jpg",	  //3.13    (59)
		"3.14.jpg",   //3.14 (60)
		"3.14.2.jpg",	//3.14.2  (61)
		"3.14.3.jpg",	//3.14.3  (62)
		"3.15.jpg",	//3.15    (63)
		"3.16.jpg",  //3.16    (64)
		"3.17.jpg",	 //3.17    (65)
		"3.18.jpg",	 //3.18    (66)
		"3.19.jpg",	 //3.19     (67)
		"3.20.jpg",	//3.20      (68)
		"3.21.jpg",   //3.21      (69)
		"3.22.jpg",	  //3.22         (70)
		"3.23.jpg",	  //3.23         (71)
		"3.24.jpg",	//3.24       (72)
		"3.25.jpg",   //3.25      (73)
		"3.26.jpg",	 //3.26      (74)
		"3.27.jpg",	//3.27        (75)
		"3.28.jpg",	  //3.28         (76)
		"dado.jpg",	 // DADOS  (77) - foto final
	
	];
	
	var telasAnteriores = [
		
		1, // esquerdo da 0
		2, // esquerdo da 1
		4, // esquerdo da 2
		6, // esquerdo da 3
		5, // esquerdo da 4
		9, // esquerdo da 5
		11, // esquerdo da 6
		10, // esquerdo da 7
		12,// esquerdo da 8
		17, // esquerdo da 9
		19, // esquerdo da 10
		21, // esquerdo da 11
		22, // esquerdo da 12
		18, // esquerdo da 13
		20, // esquerdo da 14
		23, // esquerdo da 15
		24, // esquerdo da 16
		25, // esquerdo da 17
		25, // esquerdo da 18
		25, // esquerdo da 19
		25, // esquerdo da 20
		25, // esquerdo da 21
		25, // esquerdo da 22
		25, // esquerdo da 23
		25, // esquerdo da 24
		26, // esquerdo da 25
		27, // esquerdo da 26
		29, // esquerdo da 27
		31, // esquerdo da 28
		33, // esquerdo da 29
		34, // esquerdo da 30
		39, // esquerdo da 31
		41, // esquerdo da 32
		36, // esquerdo da 33
		38, // esquerdo da 34
		45, // esquerdo da 35
		43, // esquerdo da 36
		45, // esquerdo da 37
		44, // esquerdo da 38
		45, // esquerdo da 39
		45, // esquerdo da 40
		45, // esquerdo da 41
		45, // esquerdo da 42
		45, // esquerdo da 43
		45, // esquerdo da 44
		46, // esquerdo da 45
		47, // esquerdo da 46
		48, // esquerdo da 47
		49, // esquerdo da 48
		77, // esquerdo da 49 -- paramo aqui
		51, // esquerdo da 50
		77, // esquerdo da 51
		53, // esquerdo da 52
		55, // esquerdo da 53
		69, // esquerdo da 54
		57, // esquerdo da 55
		57, // esquerdo da 56
		77, // esquerdo da 57
		59, // esquerdo da 58
		60, // esquerdo da 59
		63, // esquerdo da 60
		62, // esquerdo da 61
		54, // esquerdo da 62
		64, // esquerdo da 63
		65, // esquerdo da 64
		77, // esquerdo da 65
		67, // esquerdo da 66
		77, // esquerdo da 67
		77, // esquerdo da 68
		77, // esquerdo da 69
		71, // esquerdo da 70
		77, // esquerdo da 71
		77, // esquerdo da 72
		74, // esquerdo da 73
		75, // esquerdo da 74
		77, // esquerdo da 75
		77, // esquerdo da 76
		0, // esquerdo da 77 -- menu?
		
	];
	
	var telasPosteriores = [
		
		1, // direito da 0
		2, // direito da 1
		3, // direito da 2
		8, // direito da 3
		7, // direito da 4
		13, // direito da 5
		15, // direito da 6
		14, // direito da 7
		16,// direito da 8
		17, // direito da 9
		19,// direito da 10
		21,// direito da 11
		22,// direito da 12
		18,// direito da 13
		20,// direito da 14
		23,// direito da 15
		24,// direito da 16
		25,// direito da 17
		25,// direito da 18
		25,// direito da 19
		25, // direito da 20
		25, // direito da 21
		25, // direito da 22
		25, // direito da 23
		25, // direito da 24
		26, // direito da 25
		28, // direito da 26
		30, // direito da 27
		32, // direito da 28
		33, // direito da 29
		35, // direito da 30
		40, // direito da 31
		42, // direito da 32
		37, // direito da 33
		38, // direito da 34
		45, // direito da 35
		43, // direito da 36
		45, // direito da 37
		44, // direito da 38
		45, //direito da 39
		45, //direito da 40
		45, //direito da 41
		45, //direito da 42
		45, //direito da 43
		45, //direito da 44
		52, //direito da 45
		47, //direito da 46
		48, //direito da 47
		50, //direito da 48
		77, //direito da 49
		51, //direito da 50
		77, //direito da 51
		58, //direito da 52
		56, //direito da 53
		70, //direito da 54
		57, //direito da 55
		57, //direito da 56
		77, //direito da 57
		61, //direito da 58
		66, //direito da 59
		63, //direito da 60
		62, //direito da 61
		73, //direito da 62
		64, //direito da 63
		65, //direito da 64
		77, //direito da 65
		68, //direito da 66
		77, //direito da 67
		77, //direito da 68
		77, //direito da 69
		72, //direito da 70
		77, //direito da 71
		77, //direito da 72
		74, //direito da 73
		76, //direito da 74
		77, //direito da 75
		77, //direito da 76
		0, //direito da 77  -- menu?
		
	];
	
	this.preload = function () {

		game.load.image("botao","botao.png");
		
		game.load.image("fundo", telas[0]);
		
	};
	
	this.create = function () {
		
		botaoPodeClicar = true;
		
		telaAtual = 0;
		fundo = game.add.image(0, 0, "fundo");
		
		if (telasAnteriores[telaAtual] === telasPosteriores[telaAtual]) {
			fundo.inputEnabled = true;
			fundo.input.useHandCursor = true;
			fundo.events.onInputDown.add(acaoBotao1);
		}
		
		//botoes de decisao
		botao1 = game.add.image(0, alturaJogo - 260, "botao");
		botao1.inputEnabled = true;
		botao1.input.useHandCursor = true;
		botao1.events.onInputDown.add(acaoBotao1);
		
		botao2 = game.add.image(larguraJogo - 500, alturaJogo - 260, "botao");
		botao2.inputEnabled = true;
		botao2.input.useHandCursor = true;
		botao2.events.onInputDown.add(acaoBotao2);
		
		fadeIn();
		
	};
	
	this.update = function () {
		
	};
	
	function fundoCarregado() {
		
		fundo = game.add.image(0, 0, "fundo");
		fundo.alpha = 0;
		fundo.sendToBack();
		
		if (telasAnteriores[telaAtual] === telasPosteriores[telaAtual]) {
			fundo.inputEnabled = true;
			fundo.input.useHandCursor = true;
			fundo.events.onInputDown.add(acaoBotao1);
		}
		
		game.add.tween(fundo).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true).onComplete.add(fadeInOk, this);
		
	}
	
	function fadeOutOk() {
		
		fundo.kill();
		fundo.destroy(true, true);
		telaAtual = telaDepoisDoFadeOut;
		game.load.onLoadComplete.addOnce(fundoCarregado, this);
		game.load.image("fundo", telas[telaAtual]);
		game.load.start();
		
	}
	
	function fadeInOk() {
		
		botaoPodeClicar = true;
		
	}
	
	function acaoBotao1() {
		
		if (botaoPodeClicar == true) {
			telaDepoisDoFadeOut = telasAnteriores[telaAtual];
			if (telaAtual != telaDepoisDoFadeOut) {
				botaoPodeClicar = false;
				game.add.tween(fundo).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true).onComplete.add(fadeOutOk, this);
			}
		}
		
	}
	
	function acaoBotao2() {
		
		if (botaoPodeClicar == true) {
			telaDepoisDoFadeOut = telasPosteriores[telaAtual];
			if (telaAtual != telaDepoisDoFadeOut) {
				botaoPodeClicar = false;
				game.add.tween(fundo).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true).onComplete.add(fadeOutOk, this);
			}
		}
		
	}
	
}
