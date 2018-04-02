// index
{
	let items=document.querySelectorAll(".product_item");
	let next=document.querySelector(".case_fuhao2");
	let prev=document.querySelector(".case_fuhao");
	let imgs=document.querySelector(".case_tu2 img");
	let tItems=document.querySelectorAll(".team_xia_item");
	let tWen=document.querySelectorAll(".team_item_zi");
	let background=document.querySelectorAll(".yiju_banner_tu img");
	let shuzi=document.querySelectorAll(".shuzi span");
	let biaozhi=document.querySelectorAll(".biaozhi");
	let banner=document.querySelector(".yiju_banner");

	shuzi.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let j=0;j<shuzi.length;j++){
				shuzi[j].classList.remove("active");
				background[j].classList.remove("active");
				biaozhi[j].classList.remove("active");
			}
			this.classList.add("active");
			background[index].classList.add("active");
			biaozhi[index].classList.add("active");
			m=index;
		}
	});
	let m=0;
	let t=setInterval(move,3000);
	function move(){
		m++;
		// n=n%5;
		if(m===shuzi.length){
			m=0;
		}
		if(m<0){
			m=shuzi.length-1;
		}
		for(let j=0;j<shuzi.length;j++){
			shuzi[j].classList.remove("active");
			background[j].classList.remove("active");
			biaozhi[j].classList.remove("active");
		}
		shuzi[m].classList.add("active");
		background[m].classList.add("active");
		biaozhi[m].classList.add("active");
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);	
	}
	items.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<items.length;i++){
				items[i].classList.remove("active");
			}
			this.classList.add("active");
		}
	})
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===3){
			next.classList.add("disable");
		}
		if(n===4){
			n=3;
			return;
		}
		imgs.style.marginLeft=n*-458+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.add("disable");
		if(n===-1){
			n=0;
			return;
		}
		if(n===0){
			prev.classList.add("disable");
		}
		imgs.style.marginLeft=n*-458+"px";
	}
	tItems.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<tItems.length;i++){
				tItems[i].classList.remove("active");
				tWen[i].classList.remove("active");
			}
			this.classList.add("active");
			tWen[index].classList.add("active");
		}
	})
}