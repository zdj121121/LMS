// JavaScript Document				 
function road()
{
	number=form2.textfield3.value;
	if(number=="")
		{
			alert("�������벻��Ϊ��");
		}
	else
		{
			if(isNaN(parseInt(number)))
				{
					alert("�����������Ϊ����");
				}
			else
				{
					switch (number)
						{
	    					case "101":
		    					str="101�߹���������������  ȫ�߳��� 909 km";
     							break;
							case "102":
               					str="102 �߹�������������������ȫ�߳��� 1337 km"; 
      							break;
							case "103":       
       							str=" 103 �߹���������������¸ۡ�ȫ�߳��� 162 km"; 
      							break;
							case "104":     
        						str="104 �߹��������������ݡ�ȫ�߳��� 2420 km"; 
           						break;
							case "105":
        						str="105 �߹������������麣��ȫ�߳��� 2717 km"; 
           						break;
							case "106":
      				        	str="106 �߹��������������ݡ�ȫ�߳��� 2466 km"; 
           						break;
							case "107":
      							str="107 �߹��������������ڡ�ȫ�߳��� 2698 km"; 
           						break;
							case "108":
      							str="108 �߹�����������������ȫ�߳��� 3331 km"; 
           						break;
							case "109":
      							str="109 �߹�����������������ȫ�߳��� 3901 km"; 
           						break;
							case "110":
      							str="110 �߹�����������������ȫ�߳��� 1357 km"; 
								break;
							case "111":
								str="111 �߹������������Ӹ���桡ȫ�߳��� 2123 km"; 
           						break;
							case "112":
      							str="112 �߹������߱��ꡪ�߱��ꡡȫ�߳��� 1228 km"; 
           						break;
							case "201":
								str="201 �߹������׸ڡ���˳�ڡ�ȫ�߳��� 1964 km"; 
           						break;
							case "202":
								str="202 �߹������ںӡ���˳�ڡ�ȫ�߳��� 1818 km"; 
           						break;
							case "203":
								str=" 203 �߹�������ˮ��������ȫ�߳��� 720 km"; 
           						break;
							case "204":
								str="204 �߹�������̨���Ϻ���ȫ�߳��� 1031 km"; 
           						break;
							case "205":
								str="205 �߹�����ɽ�����������ݡ�ȫ�߳��� 3160 km"; 
           						break;
							case "206":
								str="206 �߹�������̨����ͷ��ȫ�߳��� 2375 km"; 
           						break;
							case "207":
								str="207 �߹��������ֺ��ء�������ȫ�߳��� 3738 km"; 
           						break;
							case "208":
								str="208 �߹������������ء����Ρ�ȫ�߳��� 990 km"; 
           						break;
							case "209":
								str="209 �߹����� ���ͺ��ء�������ȫ�߳��� 3435 km"; 
           						break;
							case "210":
								str="210 �߹�������ͷ��������ȫ�߳��� 3097 km"; 
           						break;
							case "211":
								str="211 �߹�����������������ȫ�߳��� 691 km"; 
                 				break;
							case "212":
								str=" 212 �߹��������ݡ����졡ȫ�߳��� 1302 km"; 
                 				break;
							case "213":
								str="213 �߹��������ݡ����顡ȫ�߳��� 2796 km"; 
                 				break;
							case "214":
								str="214 �߹�����������ĥ����ȫ�߳��� 3542 km"; 
                 				break;
							case "215":
								str="215 �߹����� ����԰�����ľ��ȫ�߳��� 641 km"; 
                 				break;
							case "216":
								str="216 �߹���������̩������̨��ȫ�߳��� 857 km"; 
                 				break;
							case "217":
								str="217 �߹����� ����̩���⳵��ȫ�߳��� 1117 km"; 
                 				break;
							case "218":
								str=" 218 �߹�������������Ǽ��ȫ�߳��� 1067 km"; 
                 				break;
							case "219":
								str="219 �߹�����Ҷ�ǡ����Ρ�ȫ�߳��� 2342 km"; 
                 				break;
							case "220":
								str="220 �߹��������ݡ�֣�ݡ�ȫ�߳��� 585 km"; 
                 				break;
							case "221":
								str="221 �߹�������������ͬ����ȫ�߳��� 668 km"; 
                 				break;
							case "222":
								str="222 �߹�������������������ȫ�߳��� 363 km"; 
                 				break;
							case "223":
								str="223 �߹��������ڡ����� ( �� ) ȫ�߳��� 323 km"; 
                 				break;
							case "224":
								str="224 �߹��������ڡ����� ( �� ) ��ȫ�߳��� 309 km"; 
                 				break;
							case "225":
								str="225 �߹��������ڡ����� ( �� ) ��ȫ�߳��� 429 km"; 
                 				break;
							case "226":
								str="226 �߹��������ۡ�ī����ȫ�߳��� 288 km"; 
           						break;
							case "227":      
								str="227 �߹�������������Ҵ��ȫ�߳��� 347 km"; 
                 				break;
							case "301":
								str="301 �߹�������Һӡ������ȫ�߳��� 1680 km"; 
                 				break;
							case "302":
								str="302 �߹������������������ء�ȫ�߳��� 1028 km"; 
                 				break;
							case "303":
								str="303 �߹��������������ֺ��ء�ȫ�߳��� 1263 km"; 
                 				break;
							case "304":
								str="304 �߹��������������ֹ��ա�ȫ�߳��� 889 km"; 
                 				break;
							case "305":
								str="305 �߹�����ׯ�ӡ�������ȫ�߳��� 815 km"; 
                 				break;
							case "306":
								str="306 �߹��������С���ʲ������  ȫ�߳��� 497 km"; 
                 				break;
							case "307":
								str="307 �߹�������ڡ�������ȫ�߳��� 1351 km"; 
                 				break;
							case "308":
								str="308 �߹������ൺ��ʯ��ׯ��ȫ�߳��� 637 km"; 
                 				break;
							case "309":
								str=" 309 �߹������ٳǡ����ݡ�ȫ�߳��� 2208 km"; 
								break;
							case "310":
       							str=" 310 �߹��������Ƹۡ���ˮ��ȫ�߳��� 1613 km"; 
                 				break;
							case "311":
								str="311 �߹��������ݡ���Ͽ��ȫ�߳��� 748 km"; 
                 				break;
							case "312":
								str=" 312 �߹������Ϻ���������ȫ�߳��� 4967 km"; 
                 				break;
							case "314":
								str="314 �߹�������³ľ�롪����������ȫ�߳��� 1948 km"; 
                 				break;
							case "315":
								str="315 �߹�������������ʲ��ȫ�߳��� 3063 km"; 
                 				break;
							case "316":
								str="316 �߹����� ���ݡ����ݡ�ȫ�߳��� 2915 km"; 
                 				break;
							case "317":
								str=" 317 �߹������ɶ���������ȫ�߳��� 2043 km"; 
                 				break;
							case "318":
								str="318 �߹������Ϻ��������š�ȫ�߳��� 5476 km"; 
                 				break;
							case "319":
								str="319 �߹��������š��ɶ���ȫ�߳��� 2984 km"; 
                 				break;
							case "320":
								str="320 �߹������Ϻ���������ȫ�߳��� 3695 km"; 
                 				break;
							case "321":
								str="321 �߹��������ݡ��ɶ���ȫ�߳��� 2220 km"; 
                 				break;
							case "322":
								str="322 �߹���������������ء�ȫ�߳��� 1039 km"; 
                 				break;
							case"323":
								str="323 �߹���������ٲ֡�ȫ�߳��� 2915 km"; 
                 				break;
							case "324":
								str="324 �߹��������ݡ�������ȫ�߳��� 2712 km"; 
                 				break;
							case "325":
								str="325 �߹��������ݡ�������ȫ�߳��� 868 km"; 
                 				break;
							case "326":
								str="326 �߹�������ɽ���ӿڡ�ȫ�߳��� 1562 km"; 
                 				break;
							case "327":
								str="327 �߹����� �������Ƹۡ�ȫ�߳��� 424 km"; 
                 				break;
							case "328":
								str="328 �߹������Ͼ�����ͨ��ȫ�߳��� 300 km"; 
                 				break;
							case "329":
								str="329 �߹��������ݡ���������ȫ�߳��� 292 km"; 
                 				break;
							case "330":
								str="330 �߹��������ݡ��ٲ���ȫ�߳��� 327 km"; 
								break;
		  					default :
		  						str="��·��Ϣ������"
		  						break;
		  				}
		  			form2.textfield22.value=str;
				}
		}
}
	   