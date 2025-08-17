function fontSelOpen() {
	document.getElementById("dropdown-font").style.display = "Block";
}

function fontEntr(ID) {
	const fonts = ["Times New Roman", "Puffin Arcade Chrome", "Source Code Pro", "Terminal"]
	const x = document.querySelectorAll("p.opt");
	document.getElementById("fontInd").innerHTML = x[parseInt(ID)].innerHTML;
	document.getElementById("dropdown-font").style.display = "None";
	document.getElementById("Text").style.fontFamily = fonts[ID];
}

function styleSelOpen() {
	document.getElementById("dropdown-style").style.display = "Block";
}

function styleEntr(ID) {
    const elm = document.getElementById("styleind");
	document.getElementById("dropdown-style").style.display = "None";
    if (ID == 0) {
        Center();
        
		document.getElementById("boldButn").src = '../Images/BoldButtonPressed.png';
		document.getElementById("Text").style.fontWeight = "Bold";
        
        document.getElementById("Kbtn").src = '../Images/kButtonPressed.png';
		document.getElementById("Text").style.textTransform  = "Uppercase";
        
        document.getElementById("NumInp").value = 20;
        checkValue(document.getElementById("NumInp"));
        
        elm.innerHTML = "Title";
    } else if (ID == 1) {
        Center();
        
        document.getElementById("boldButn").src = '../Images/BoldButtonPressed.png';
		document.getElementById("Text").style.fontWeight = "Bold";
        
        document.getElementById("NumInp").value = 18;
        checkValue(document.getElementById("NumInp"));
        
        elm.innerHTML = "Heading";
    } else if (ID == 2) {
        Center();
        
        document.getElementById("UnderlineButn").src = '../Images/UnderlineButtonPressed.png';
		document.getElementById("DashedButn").src = '../Images/wButton.png';
		document.getElementById("DoubleButn").src = '../Images/dButon.png';
		document.getElementById("Text").style.textDecoration = "underline";
        
        document.getElementById("NumInp").value = 16;
        checkValue(document.getElementById("NumInp"));
        
        elm.innerHTML = "Subheading";
    } else if (ID == 3) {
        Left();
        
        document.getElementById("boldButn").src = '../Images/BoldButton.png';
		document.getElementById("Text").style.fontWeight = "Normal";
        
        document.getElementById("ItalicButn").src = '../Images/ItalicButton.png';
		document.getElementById("Text").style.fontStyle = "Normal";
        
        document.getElementById("Kbtn").src = '../Images/kButton.png';
		document.getElementById("Text").style.textTransform  = "None";
        
        document.getElementById("UnderlineButn").src = '../Images/UnderlineButton.png';
		document.getElementById("Text").style.textDecoration = "none";
        
        document.getElementById("DashedButn").src = '../Images/wButton.png';
		document.getElementById("Text").style.textDecoration = "none";
        
        document.getElementById("DoubleButn").src = '../Images/dButon.png';
		document.getElementById("Text").style.textDecoration = "none";
        
        document.getElementById("NumInp").value = 10;
        checkValue(document.getElementById("NumInp"));
    }
}

function checkValue(sender) {
    let min = sender.min;
    let max = sender.max;
    // here we perform the parsing instead of calling another function
    let value = parseInt(sender.value);
    if (value>max) {
        sender.value = max;
    } else if (value<min) {
        sender.value = min;
    }
	let size  = sender.value + "pt";
	document.getElementById("Text").style.fontSize = size;
}

function Bold(img) {
	if (img.src.includes('Pressed.png') == true) {
		img.src = '../Images/BoldButton.png';
		document.getElementById("Text").style.fontWeight = "Normal";
	} else  {
		img.src = '../Images/BoldButtonPressed.png';
		document.getElementById("Text").style.fontWeight = "Bold";
	}
}

function Italic(img) {
	if (img.src.includes('Pressed.png') == true) {
		img.src = '../Images/ItalicButton.png';
		document.getElementById("Text").style.fontStyle = "Normal";
	} else  {
		img.src = '../Images/ItalicButtonPressed.png';
		document.getElementById("Text").style.fontStyle = "Italic";
	}
}

function Kbtn(img) {
	if (img.src.includes('Pressed.png') == true) {
		img.src = '../Images/kButton.png';
		document.getElementById("Text").style.textTransform  = "None";
	} else  {
		img.src = '../Images/kButtonPressed.png';
		document.getElementById("Text").style.textTransform  = "Uppercase";
	}
}

function Underline(img) {
	if (img.src.includes('Pressed.png') == true) {
		img.src = '../Images/UnderlineButton.png';
		document.getElementById("Text").style.textDecoration = "none";
	} else  {
		img.src = '../Images/UnderlineButtonPressed.png';
		document.getElementById("DashedButn").src = '../Images/wButton.png';
		document.getElementById("DoubleButn").src = '../Images/dButon.png';
		document.getElementById("Text").style.textDecoration = "underline";
	}
}

function Wbtn(img) {
	if (img.src.includes('Pressed.png') == true) {
		img.src = '../Images/wButton.png';
		document.getElementById("Text").style.textDecoration = "none";
	} else  {
		img.src = '../Images/wButtonPressed.png';
		document.getElementById("UnderlineButn").src = '../Images/UnderlineButton.png';
		document.getElementById("DoubleButn").src = '../Images/dButon.png';
		document.getElementById("Text").style.textDecoration = "underline dashed";
	}
}

function Dbtn(img) {
	if (img.src.includes('Pressed.png') == true) {
		img.src = '../Images/dButon.png';
		document.getElementById("Text").style.textDecoration = "none";
	} else  {
		img.src = '../Images/dButonPressed.png';
		document.getElementById("UnderlineButn").src = '../Images/UnderlineButton.png';
		document.getElementById("DashedButn").src = '../Images/wButton.png';
		document.getElementById("Text").style.textDecoration = "underline double";
	}
}

function Math(img) {
	if (img.src.includes('Pressed.png') == true) {
		img.src = '../Images/plusEqualButn.png';
	} else  {
		img.src = '../Images/plusEqualButnPressed.png';
	}
}

function Star(img) {
	if (img.src.includes('Pressed.png') == true) {
		img.src = '../Images/starButn.png';
	} else  {
		img.src = '../Images/starButnPressed.png';
	}
}

function Left() {
	document.getElementById("leftAllignText").src = "../Images/leftAlignPressed.png";
	document.getElementById("centerAllignText").src = "../Images/centerAlign.png";
	document.getElementById("rightAlligntText").src = "../Images/rightAllign.png";
	document.getElementById("justifyText").src = "../Images/justifyAllign.png";
	document.getElementById("Text").style.textAlign = "Left";
}

function Center() {
	document.getElementById("leftAllignText").src = "../Images/leftAlign.png";
	document.getElementById("centerAllignText").src = "../Images/centerAlignPressed.png";
	document.getElementById("rightAlligntText").src = "../Images/rightAllign.png";
	document.getElementById("justifyText").src = "../Images/justifyAllign.png";
	document.getElementById("Text").style.textAlign = "Center";
}

function Right() {
	document.getElementById("leftAllignText").src = "../Images/leftAlign.png";
	document.getElementById("centerAllignText").src = "../Images/centerAlign.png";
	document.getElementById("rightAlligntText").src = "../Images/rightAllignPressed.png";
	document.getElementById("justifyText").src = "../Images/justifyAllign.png";
	document.getElementById("Text").style.textAlign = "Right";
}

function Just() {
	document.getElementById("leftAllignText").src = "../Images/leftAlign.png";
	document.getElementById("centerAllignText").src = "../Images/centerAlign.png";
	document.getElementById("rightAlligntText").src = "../Images/rightAllign.png";
	document.getElementById("justifyText").src = "../Images/justifyAllignPressed.png";
	document.getElementById("Text").style.textAlign = "Justify";
}

function Space1() {
	document.getElementById("space1").src = "../Images/spaceing1Pressed.png";
	document.getElementById("space2").src = "../Images/spaceing2.png";
	document.getElementById("space3").src = "../Images/spaceing3.png";
	document.getElementById("Text").style.lineHeight = "1";
}

function Space2() {
	document.getElementById("space1").src = "../Images/spaceing1.png";
	document.getElementById("space2").src = "../Images/spaceing2Pressed.png";
	document.getElementById("space3").src = "../Images/spaceing3.png";
	document.getElementById("Text").style.lineHeight = "1.5";
}

function Space3() {
	document.getElementById("space1").src = "../Images/spaceing1.png";
	document.getElementById("space2").src = "../Images/spaceing2.png";
	document.getElementById("space3").src = "../Images/spaceing3Pressed.png";
	document.getElementById("Text").style.lineHeight = "2";
}

function BR1() {
	document.getElementById("brTxtButn").src = "../Images/bracket1Pressed.png";
	document.getElementById("brTxtButn2").src = "../Images/bracket2.png";
}

function BR2() {
	document.getElementById("brTxtButn").src = "../Images/bracket1.png";
	document.getElementById("brTxtButn2").src = "../Images/bracket2Pressed.png";
}

function Arrow1() {
	document.getElementById("leftUpButn").src = "../Images/textLeftUpPressed.png";
	document.getElementById("UpButn").src = "../Images/textUp.png";
	document.getElementById("rightUpButn").src = "../Images/textRightUp.png";
	document.getElementById("Up2Butn").src = "../Images/textUp2.png";
}

function Arrow2() {
	document.getElementById("leftUpButn").src = "../Images/textLeftUp.png";
	document.getElementById("UpButn").src = "../Images/textUpPressed.png";
	document.getElementById("rightUpButn").src = "../Images/textRightUp.png";
	document.getElementById("Up2Butn").src = "../Images/textUp2.png";
}

function Arrow3() {
	document.getElementById("leftUpButn").src = "../Images/textLeftUp.png";
	document.getElementById("UpButn").src = "../Images/textUp.png";
	document.getElementById("rightUpButn").src = "../Images/textRightUpPressed.png";
	document.getElementById("Up2Butn").src = "../Images/textUp2.png";
}

function Arrow4() {
	document.getElementById("leftUpButn").src = "../Images/textLeftUp.png";
	document.getElementById("UpButn").src = "../Images/textUp.png";
	document.getElementById("rightUpButn").src = "../Images/textRightUp.png";
	document.getElementById("Up2Butn").src = "../Images/textUp2Pressed.png";
}

function Ruler(img) {
	if (img.src.includes('Pressed.png') == true) {
		img.src = '../Images/RulerButn.png';
		document.getElementById("ruler").style.display = "none";
	} else  {
		img.src = '../Images/RulerButnPressed.png';
		document.getElementById("ruler").style.display = "block";
	}
}
