import "./app.css";
import p0 from "./chess/rook2.png";
import p1 from "./chess/knight2.png";
import p2 from "./chess/bis2.png";
import p3 from "./chess/queen2.png";
import p4 from "./chess/king2.png";
import p5 from "./chess/rook.png";
import p6 from "./chess/knight.png";
import p7 from "./chess/bis.png";
import p8 from "./chess/queen.png";
import p9 from "./chess/king.png";
import p10 from "./chess/pawn.png";
import p11 from "./chess/pawn2.png";

const p=[p0,p5,p1,p6,p2,p7,p3,p8,p4,p9,p10,p11];  //list of images

const iden=["wr","br","wk","bk","wb","bb","wq","bq","wz","bz","wp","bp"]; // id of pieces

const fm=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]; //Has pawns made their 1st move

let d=0,d3=0,d1=0,k1="04",k2="74";

const arr=["wr","wk","wb","wq","wz","wb","wk","wr","wp0","wp1","wp2","wp3","wp4","wp5","wp6","wp7",
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
"bp0","bp1","bp2","bp3","bp4","bp5","bp6","bp7","br","bk","bb","bq","bz","bb","bk","br"]; //location of each pieces

let y=0;

// func to rotate board

const boardrotate=()=>{
  document.getElementsByClassName("h")[0].style.transform="rotateX("+y+"deg)";
  let a1=document.getElementsByTagName("img")
  for(let i of a1)
    i.style.transform="rotateX("+y+"deg)";
  
  y+=180;
  if(y==360)
    y=0;
}

const ischeck=(e)=>{ // function to check if there is check

if(d.id[0]=='w'){

let te=k1[0]+k1[1]; 

if(e.target.className[0]!='A')
  e=e.target.parentNode;
else
  e=e.target;

let t1=arr[Number(e.className[3])*8+Number(e.className[4])];

let t=d.id;

arr[Number(e.className[3])*8+Number(e.className[4])]=d.id;

arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=0;

if(t=="wz")
   k1=e.className.slice(3,5);

for(let i=Number(k1[0])+1;i<8;i++)
  {
    if(arr[i*8+Number(k1[1])]=="bq" || arr[i*8+Number(k1[1])]=="br")
      {
        arr[Number(e.className[3])*8+Number(e.className[4])]=t1;
        arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=d.id;
        if(t=='wz')
          k1=te;
        return true;
      }
    if(arr[i*8+Number(k1[1])]!=0)
      break;
  }

 for(let i=Number(k1[0])-1;i>-1;i--)
   {
    if(arr[i*8+Number(k1[1])]=="bq" ||arr[i*8+Number(k1[1])]=="br")
      {
        arr[Number(e.className[3])*8+Number(e.className[4])]=t1;
        arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=d.id;
        if(t=='wz')
          k1=te;
        return true;
      }
    if(arr[i*8+Number(k1[1])]!=0)
      break;
    }

for(let i=Number(k1[1])+1;i<8;i++)
  {
    if(arr[Number(k1[0])*8+i]=="bq" ||arr[Number(k1[0])*8+i]=="br")
      {
        arr[Number(e.className[3])*8+Number(e.className[4])]=t1;
        arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=d.id;
        if(t=='wz')
          k1=te;
        return true;
      }
    if(arr[Number(k1[0])*8+i]!=0)
      break;
 }

 for(let i=Number(k1[1])-1;i>-1;i--)
  {
    if(arr[Number(k1[0])*8+i]=="bq" ||arr[Number(k1[0])*8+i]=="br")
      {
        arr[Number(e.className[3])*8+Number(e.className[4])]=t1;
        arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=d.id;
        if(t=='wz')
          k1=te;
        return true;
      }
    if(arr[Number(k1[0])*8+i]!=0)
      break;
 }

 for(let i=Number(k1[0])+1;i<8;i++)
  {
    if(arr[i*8+Number(k1[1])+Number(k1[0])-i]=="bq" || arr[i*8+Number(k1[1])+Number(k1[0])-i]=="bb")
      {
        arr[Number(e.className[3])*8+Number(e.className[4])]=t1;
        arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=d.id;
        if(t=='wz')
          k1=te;
        return true;
      }
    if(arr[i*8+Number(k1[1])+Number(k1[0])-i]!=0)
      break;
 }

 for(let i=Number(k1[0])+1;i<8;i++)
  {
    if(arr[i*8+Number(k1[1])-Number(k1[0])+i]=="bq" || arr[i*8+Number(k1[1])-Number(k1[0])+i]=="bb")
      {
        arr[Number(e.className[3])*8+Number(e.className[4])]=t1;
        arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=d.id;
        if(t=='wz')
          k1=te;
        return true;
      }
    if(arr[i*8+Number(k1[1])-Number(k1[0])+i]!=0)
      break;
 }

 for(let i=Number(k1[0])-1;i>-1;i--)
  {
    if(arr[i*8+Number(k1[1])-Number(k1[0])+i]=="bq" ||arr[i*8+Number(k1[1])-Number(k1[0])+i]=="bb")
      {
        arr[Number(e.className[3])*8+Number(e.className[4])]=t1;
        arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=d.id;
        if(t=='wz')
          k1=te;
        return true;
      }
    if(arr[i*8+Number(k1[1])-Number(k1[0])+i]!=0)
       break;
 }

 for(let i=Number(k1[0])-1;i>-1;i--)
  {
    if(arr[i*8+Number(k1[1])+Number(k1[0])-i]=="bq" ||arr[i*8+Number(k1[1])+Number(k1[0])-i]=="bb")
    {
      arr[Number(e.className[3])*8+Number(e.className[4])]=t1;
      arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=d.id;
      if(t=='wz')
        k1=te;
      return true;
    }
    if(arr[i*8+Number(k1[1])+Number(k1[0])-i]!=0)
      break;
 }

return false;
}

if(d.id[0]=='b')
{
let te=k2;

if(e.target.className[0]!='A')
  e=e.target.parentNode;
else
  e=e.target;

let t1=arr[Number(e.className[3])*8+Number(e.className[4])];

let t=d.id;

arr[Number(e.className[3])*8+Number(e.className[4])]=d.id;

arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=0;

if(t=="bz")
  k2=e.className.slice(3,5);

for(let i=Number(k2[0])+1;i<8;i++)
  {
    if(arr[i*8+Number(k2[1])]=="wq" || arr[i*8+Number(k2[1])]=="wr")
      {
        arr[Number(e.className[3])*8+Number(e.className[4])]=t1;
        arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=d.id;
        if(t=='bz')
          k2=te;
        return true;
      }
    if(arr[i*8+Number(k2[1])]!=0)
      break;
 }
 
 for(let i=7;i>Number(k2[0]);i--)
  {
    if(arr[i*8+Number(k2[1])]=="wq" ||arr[i*8+Number(k2[1])]=="wr")
    {
      arr[Number(e.className[3])*8+Number(e.className[4])]=t1;
      arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=d.id;
      if(t=='bz')
        k2=te;
      return true;
    }
    if(arr[i*8+Number(k2[1])]!=0)
      break;
 }
 
for(let i=Number(k2[1])+1;i<8;i++)
  {
    if(arr[Number(k2[0])*8+i]=="wq" ||arr[Number(k2[0])*8+i]=="wr")
      {
        arr[Number(e.className[3])*8+Number(e.className[4])]=t1;
        arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=d.id;
        if(t=='bz')
          k2=te;
        return true;}
    if(arr[Number(k2[0])*8+i]!=0)
      break;
 }

 for(let i=7;i>Number(k2[1]);i--)
  {
    if(arr[Number(k2[0])*8+i]=="wq" ||arr[Number(k2[0])*8+i]=="wr")
    {
      arr[Number(e.className[3])*8+Number(e.className[4])]=t1;
      arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=d.id;
      if(t=='bz')
        k2=te;
      return true;}
    if(arr[Number(k2[0])*8+i]!=0)
      break;
 }

for(let i=Number(k2[0])+1;i<8;i++)
  {
    if(arr[i*8+Number(k2[1])+Number(k2[0])-i]=="wq" || arr[i*8+Number(k2[1])+Number(k2[0])-i]=="wb")
    {
      arr[Number(e.className[3])*8+Number(e.className[4])]=t1;
      arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=d.id;
      if(t=='bz')
        k2=te;
      return true;
    }
    if(arr[i*8+Number(k2[1])+Number(k2[0])-i]!=0)
      break;
 }

 for(let i=Number(k2[0])+1;i<8;i++)
  {
    if(arr[i*8+Number(k2[1])-Number(k2[0])+i]=="wq" || arr[i*8+Number(k2[1])-Number(k2[0])+i]=="wb")
    {
      arr[Number(e.className[3])*8+Number(e.className[4])]=t1;
      arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=d.id;
      if(t=='bz')
        k2=te;
      return true;
    }
    if(arr[i*8+Number(k2[1])-Number(k2[0])+i]!=0)
      break;
 }

 for(let i=Number(k2[0])-1;i>-1;i--)
  {
    if(arr[i*8+Number(k2[1])-Number(k2[0])+i]=="wq" ||arr[i*8+Number(k2[1])-Number(k2[0])+i]=="wb")
    {
      arr[Number(e.className[3])*8+Number(e.className[4])]=t1;
      arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=d.id;
    if(t=='bz')
      k2=te;
    return true;
    }
    if(arr[i*8+Number(k2[1])-Number(k2[0])+i]!=0)
      break;
 }

 for(let i=Number(k2[0])-1;i>-1;i--)
  {
    if(arr[i*8+Number(k2[1])+Number(k2[0])-i]=="wq" ||arr[i*8+Number(k2[1])+Number(k2[0])-i]=="wb")
    {
      arr[Number(e.className[3])*8+Number(e.className[4])]=t1;
      arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=d.id;
      if(t=='bz')
        k2=te;
      return true;
    }
    if(arr[i*8+Number(k2[1])+Number(k2[0])-i]!=0)
      break;
  }

}
 return false;
}

const poss=(d,e)=>{ // to check if the move is possible or not

if(d.id[0]+d.id[1]==iden[10])
 {
  if(Number(e.className.slice(3))==Number(d.parentNode.className.slice(3))+20 && fm[0][d.id[2]]==0 &&e.childNodes.length==0)
    return true;
  if(Number(e.className.slice(3))==Number(d.parentNode.className.slice(3))+10 &&e.childNodes.length==0)
    return true;
  if((Number(e.className.slice(3))==Number(d.parentNode.className.slice(3))+11||Number(e.className.slice(3))==Number(d.parentNode.
    className.slice(3))+9) && e.childNodes.length!=0)
    return true;
  return false;
 }

if(d.id[0]+d.id[1]==iden[11]){
  if(Number(e.className.slice(3))==Number(d.parentNode.className.slice(3))-20 && fm[1][d.id[2]]==0 &&e.childNodes.length==0)
    return true;
  if(Number(e.className.slice(3))==Number(d.parentNode.className.slice(3))-10 &&e.childNodes.length==0)
    return true;
  if((Number(e.className.slice(3))==Number(d.parentNode.className.slice(3))-11||Number(e.className.slice(3))==Number(d.parentNode.
    className.slice(3))-9) && e.childNodes.length!=0)
    return true;
  return false;
  }

if(d.id[1]=='r')
{
  if(e.className[3]==d.parentNode.className[3])
    {
      if(Number(e.className[4])>Number(d.parentNode.className[4]))
        {
          for(let i=Number(d.parentNode.className[4])+1;i<Number(e.className[4]);i++)
            if(e.parentNode.childNodes[Number(e.className[3])*8+i+1].childNodes.length!=0)
              return false;
        }
      else
        {
          for(let i=Number(e.className[4])+1;i<Number(d.parentNode.className[4]);i++)
            if(e.parentNode.childNodes[Number(e.className[3])*8+i+1].childNodes.length!=0)
              return false;
        }
      return true;
     }

  if(e.className[4]==d.parentNode.className[4])
   {
    if(Number(e.className[3])<Number(d.parentNode.className[3]))
      for(let i=Number(e.className[3])+1;i<Number(d.parentNode.className[3]);i++)
        {
          if(e.parentNode.childNodes[Number(e.className[4])+i*8+1].childNodes.length!=0)
            return false;
        }
    else
      {
        for(let i=Number(d.parentNode.className[3])+1;i<Number(e.className[3]);i++)
          if(e.parentNode.childNodes[Number(e.className[4])+i*8+1].childNodes.length!=0)
            return false;
      }
    return true;
  }

return false;
}

if(d.id[1]=='k')
{
  let x=Number(e.className[3]);
  let y=Number(e.className[4]);
  let z1=Number(d.parentNode.className[3]);
  let z2=Number(d.parentNode.className[4]);

  if((x==z1+2 && y==z2-1)||(x==z1-2 && y==z2-1)||(x==z1+2 && y==z2+1)||(x==z1-2 && y==z2+1)||(x==z1+1 && y==z2-2)||(x==z1-1 && y==z2-2)||
    (x==z1+1 && y==z2+2)||(x==z1-1 && y==z2+2))
    return true;
  return false;
}

if(d.id[1]=='b')
{
 if(Math.abs(Number(e.className[3])-Number(d.parentNode.className[3]))==Math.abs(Number(e.className[4])-Number(d.parentNode.className[4])))
  {
    let a2=-1;
    let a1=Number(d.parentNode.className[4]);
    if(Number(e.className[4])>Number(d.parentNode.className[4]))
      a2=1;
    if(Number(e.className[3])<Number(d.parentNode.className[3]))
      {
        a1=Number(e.className[4])-a2;
        a2=-1*a2;
      }
    else
      a1+=a2;
    for(let i=Math.min(Number(d.parentNode.className[3]),Number(e.className[3]))+1;
      i<Math.max(Number(d.parentNode.className[3]),Number(e.className[3]));i++)
      {
        if(e.parentNode.childNodes[i*8+a1+1].childNodes.length!=0)
          return false;
        a1+=a2;
      }
    return true;
  }
 return false;
}

if(d.id[1]=='q')
{
 if(e.className[3]==d.parentNode.className[3])
  {
    if(Number(e.className[4])>Number(d.parentNode.className[4]))
      {
        for(let i=Number(d.parentNode.className[4])+1;i<Number(e.className[4]);i++)
          if(e.parentNode.childNodes[Number(e.className[3])*8+i+1].childNodes.length!=0)
            return false;
      }
    else
      {
       for(let i=Number(e.className[4])+1;i<Number(d.parentNode.className[4]);i++)
        if(e.parentNode.childNodes[Number(e.className[3])*8+i+1].childNodes.length!=0)
          return false;
      }
    return true;
  }
  if(e.className[4]==d.parentNode.className[4])
   {
    if(Number(e.className[3])<Number(d.parentNode.className[3]))
      {
        for(let i=Number(e.className[3])+1;i<Number(d.parentNode.className[3]);i++)
          if(e.parentNode.childNodes[Number(e.className[4])+i*8+1].childNodes.length!=0)
            return false;
      }
    else
      {
        for(let i=Number(d.parentNode.className[3])+1;i<Number(e.className[3]);i++)
        if(e.parentNode.childNodes[Number(e.className[4])+i*8+1].childNodes.length!=0)
          return false;
      }
    return true;
  }
  if(Math.abs(Number(e.className[3])-Number(d.parentNode.className[3]))==Math.abs(Number(e.className[4])-Number(d.parentNode.className[4])))
    {
      let a2=-1;
      let a1=Number(d.parentNode.className[4]);
      if(Number(e.className[4])>Number(d.parentNode.className[4]))
      {
        a2=1;
        a1+=1;
      }
  else
    a1-=1;

  if(Number(e.className[3])<Number(d.parentNode.className[3]))
    {
      a1=Number(e.className[4])-a2;
      a2=-1*a2;
    }

  for(let i=Math.min(Number(d.parentNode.className[3]),Number(e.className[3]))+1;
    i<Math.max(Number(d.parentNode.className[3]),Number(e.className[3]));i++)
   {
    if(e.parentNode.childNodes[i*8+a1+1].childNodes.length!=0)
      return false;
    a1+=a2;
   }
   
  return true;
  }
  return false;
}

if(d.id[1]=='z')
 {
  if(Math.max(Math.abs(Number(e.className[3])-Number(d.parentNode.className[3])),Math.abs(Number(e.className[4])-Number
    (d.parentNode.className[4])))==1)
      return true;
  return false;
}

}

const opt=(e)=>{ //func to handle clicks and captures of pieces
  let c=1;

  if(d==0)
    {
    d=e.currentTarget;
    return;
    }
  
  if((d3%2==0 && (d.className=="blacks"||d.className=="black"))||(d3%2!=0 && 
    (d.className=="whites"||d.className=="white")))
    {
      d=e.currentTarget;
      return;
    }
    
  if(d.className!=e.currentTarget.className && d.className+"s"!=e.currentTarget.className && 
    e.currentTarget.className+"s"!=d.className && poss(d,e.currentTarget.parentNode) && !ischeck(e))
   {
    d3+=1;
    if(d.className=="blacks")
      fm[1][Number(d.id[2])]=1;
    if(d.className=="whites")
      fm[0][Number(d.id[2])]=1;
    arr[Number(e.currentTarget.parentNode.className[3])*8+Number(e.currentTarget.parentNode.className[4])]=d.id;
    arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=0;
    e.currentTarget.parentNode.replaceChild(d,e.currentTarget.parentNode.childNodes[0]);
  
  if(d.id[1]=="z")
   {
    if(d.id[0]=='w')
      k1=e.className[3]+e.className[4];
    else
      k2=e.className[3]+e.className[4];
   }

    if(d.className=="blacks" && (d.parentNode.className=="App00" || d.parentNode.className=="App01" || 
    d.parentNode.className=="App02" || d.parentNode.className=="App03" || 
    d.parentNode.className=="App04" || d.parentNode.className=="App05" ||
    d.parentNode.className=="App06" || d.parentNode.className=="App07"))
    {
      document.getElementsByClassName("sacri")[0].style.display="block";
      window.scrollTo(0,0);
      d1=d;
      c=0;
    }
   
   if(d.className=="whites" && (d.parentNode.className=="App70" || d.parentNode.className=="App71" || 
    d.parentNode.className=="App72" || d.parentNode.className=="App73" || 
    d.parentNode.className=="App74" || d.parentNode.className=="App75" ||
    d.parentNode.className=="App76" || d.parentNode.className=="App77"))
    {
      document.getElementsByClassName("sacri2")[0].style.display="block";
      window.scrollTo(0,document.body.scrollHeight);
      d1=d;
      c=0;
    }
    boardrotate();
    d=0;
    }
    else
      d=e.currentTarget;
}


//func for sacrifice

const chan=(e)=>{
  let d2=d1.parentNode;
  d1.parentNode.removeChild(d1);
  d1.src=e.currentTarget.src;
  d1.className=e.currentTarget.className.slice(0,5);
  d1.id=e.currentTarget.id;
  d1.style.border="none";
  d1.onClick={opt};
  d2.appendChild(d1);
  arr[Number(d2.className[3])*8+Number(d2.className[4])]=d1.id;
  document.getElementsByClassName(e.currentTarget.parentNode.className)[0].style.display="none";
  document.getElementsByClassName('h')[0].style.transform="rotateX("+y+"deg)";
  
  boardrotate();
  d=0;
}

//func to handle moving of pieces to empty boxes

const move=(e)=>{
  let c=1;

  if(d==0 || e.target!=e.currentTarget)
    return;
  
  if((d3%2==0 && (d.className=="blacks"||d.className=="black"))||(d3%2!=0 && (d.className=="whites"||d.className=="white")))
  {
    d=0;
    return;
  }
  
  if((e.target.childNodes.length)==0 && e.target==e.currentTarget && poss(d,e.target) && !ischeck(e))
  {
    arr[Number(e.target.className[3])*8+Number(e.target.className[4])]=d.id;
    arr[Number(d.parentNode.className[3])*8+Number(d.parentNode.className[4])]=0;
    d.parentNode.removeChild(d);
    e.target.appendChild(d);
    d3+=1;

    if(d.className=="blacks")
      fm[1][Number(d.id[2])]=1;
    if(d.className=="whites")
      fm[0][Number(d.id[2])]=1;
    
    if(d.id[1]=="z")
    {
      if(d.id[0]=='w')
        k1=e.className[3]+e.className[4];
      else
        k2=e.className[3]+e.className[4];
    }

    if(d.className=="blacks" && (d.parentNode.className=="App00" || d.parentNode.className=="App01" || 
      d.parentNode.className=="App02" || d.parentNode.className=="App03" || 
      d.parentNode.className=="App04" || d.parentNode.className=="App05" ||
      d.parentNode.className=="App06" || d.parentNode.className=="App07"))
      {
        document.getElementsByClassName("sacri")[0].style.display="block";
        window.scrollTo(0,0);
        c=0;
        d1=d;
      }
    if(d.className=="whites" && (d.parentNode.className=="App70" || d.parentNode.className=="App71" || 
      d.parentNode.className=="App72" || d.parentNode.className=="App73" || 
      d.parentNode.className=="App74" || d.parentNode.className=="App75" ||
      d.parentNode.className=="App76" || d.parentNode.className=="App77"))
      {
        document.getElementsByClassName("sacri2")[0].style.display="block";
        window.scrollTo(0,document.body.scrollHeight);
        d1=d;
        c=0;
      }
  }
  else
    return

  d=0;
  if(c)
    boardrotate();
}

//app

function App() {
  const no=['0','1','2','3','4','5','6','7'];
  const a=['2','3','4','5']
  window.scrollTo(0,0);

  return (
    <div className="h">
      <div className="sacri">
        <img onClick={chan} className="blackp" id="bq" src={p3}></img>
        <img onClick={chan} className="blackp" id="br" src={p0}></img>
        <img onClick={chan} className="blackp" id="bk" src={p1}></img>
        <img onClick={chan} className="blackp" id="bb" src={p2}></img>
      </div>

      {
        no.map(n=>(
        <div id={"App0"+n} onClick={move}className={"App0"+n}>
          <img onClick={opt} className="white" src={p[(Number(n)<5)?2*Number(n)+1:2*(7-Number(n))+1]} id={iden[(Number(n)<5)?2*Number(n):2*(7-Number(n))]}></img>
        </div>
        ))
      }

      {
        no.map(n=>(
        <div id={"App1"+n} onClick={move}className={"App1"+n}>
          <img onClick={opt} className="whites" src={p10} id={iden[10]+n}></img>
        </div>
        ))
      }

      {
        a.map(m=>(no.map(n=>(
        <div id={"App"+n} onClick={move}className={"App"+m+n}></div>
        ))))
      }
        
      {
        no.map(n=>(
        <div id={"App6"+n} onClick={move}className={"App6"+n}>
          <img onClick={opt} className="blacks" src={p11} id={iden[11]+n}></img>
        </div>
        ))
      }

      {
        no.map(n=>(
        <div id={"App7"+n} onClick={move}className={"App7"+n}>
          <img onClick={opt} className="black" src={p[(Number(n)<5)?2*Number(n):2*(7-Number(n))]} id={iden[(Number(n)<5)?2*Number(n)+1:2*(7-Number(n))+1]}>
        </img>
        </div>
        ))
      }
      
      <div className="sacri2">
        <img onClick={chan} className="whitep" src={p8} id="wq"/>
        <img onClick={chan} className="whitep" src={p5} id="wr"/>
        <img onClick={chan} className="whitep" src={p6} id="wk"/>
        <img onClick={chan} className="whitep" src={p7} id="wb"/>
      </div>
    </div>
  );
}

export default App;