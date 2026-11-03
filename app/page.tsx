/* eslint-disable */
// @ts-nocheck
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Script from "next/script";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";

/* ---------- Tipografías ---------- */
const display = Bricolage_Grotesque({ subsets: ["latin"] });
const body = Hanken_Grotesk({ subsets: ["latin"] });

/* ---------- Paleta ----------
   Tinta    #0C0F1A  (fondos oscuros y texto)
   Hielo    #EEF0F4  (fondos claros)
   Cobalto  #2433FF  (acento y sección de contacto)
   Blanco   #FFFFFF
   Gris     #5B6070  (texto secundario)
*/

const servicios = [
  ["Operador de cámara", "Cámara y steadycam en eventos y conciertos."],
  ["Realización", "Realización de eventos y producciones audiovisuales."],
  ["Producción audiovisual", "Proyectos para marcas, empresas y productoras."],
];

const TELEFONO = "+34 636 893 279";
const WHATSAPP = "https://wa.me/34636893279";

/* ---------- Intro animada del logo ----------
   La animación está en /public/intro-mk.svg
   - Sale una vez por sesión (al cerrar y volver a abrir la pestaña, vuelve a salir).
   - Si el visitante tiene activado "reducir movimiento", no se muestra.
   - Se puede saltar con el botón "Saltar" o con Escape.
   - Para cambiar la duración, modifica DURACION_INTRO (milisegundos). */
const DURACION_INTRO = 4600;

function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducido || sessionStorage.getItem("mk-intro") === "1") {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const cerrar = () => {
      sessionStorage.setItem("mk-intro", "1");
      document.body.style.overflow = "";
      setVisible(false);
    };

    const t = setTimeout(cerrar, DURACION_INTRO);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("click", cerrar);

    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("click", cerrar);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          role="dialog"
          aria-label="MK Audiovisual"
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 99999,
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img
            src="/intro-mk.svg"
            alt="MK Audiovisual"
            style={{ display: "block", width: "100%", maxWidth: 820, maxHeight: "70vh" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------- Cabecera ---------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 text-white transition-colors duration-300 ${
        scrolled ? "bg-[#0C0F1A]/85 backdrop-blur" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3" aria-label="MK Audiovisual, inicio">
          <img
            src="/logo.jpeg"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className={`${display.className} hidden text-lg font-bold sm:block`}>
            MK Audiovisual
          </span>
        </a>

        <nav className="flex items-center gap-5 text-sm font-medium md:gap-8 md:text-base">
          <a href="#trabajos" className="hidden hover:underline sm:block">
            Trabajos
          </a>
          <a href="#disponibilidad" className="hidden hover:underline sm:block">
            Disponibilidad
          </a>
          <a
            href="#contacto"
            className="rounded-full bg-white px-5 py-2 font-semibold text-[#0C0F1A] transition hover:bg-[#EEF0F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Pedir presupuesto
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ---------- Calendario de disponibilidad ---------- */
function Disponibilidad() {
  return (
    <div>
      <h2
        className={`${display.className} text-4xl font-extrabold leading-tight tracking-tight md:text-5xl`}
      >
        Disponibilidad
      </h2>
      <p className="mt-4 max-w-xl text-lg text-[#5B6070]">
        Consulta qué fechas tengo ocupadas. Si tu día está libre, escríbeme y lo
        reservamos.
      </p>

      <div className="mt-10 overflow-hidden rounded-lg border border-[#0C0F1A]/15 bg-white">
        <iframe
          title="Calendario de disponibilidad de MK Audiovisual"
          src="https://calendar.google.com/calendar/embed?src=markmartinezemp%40gmail.com&ctz=Europe%2FMadrid&hl=es&mode=MONTH&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0"
          className="h-[640px] w-full border-0 md:h-[820px]"
          loading="lazy"
        />
      </div>

      <a
        href="#contacto"
        className="mt-8 inline-block rounded-full bg-[#0C0F1A] px-8 py-3.5 font-semibold text-white transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C0F1A]"
      >
        Reservar una fecha
      </a>
    </div>
  );
}


/* ---------- TUS FOTOS DEL PORTFOLIO ----------
   Están en /public/galeria. Para cambiar el orden, mueve las líneas.
   Para añadir una, copia la foto a /public/galeria y añade una línea. */
const FOTOS = [
  { src: "/galeria/foto1.jpg", alt: "Operador de cámara en una plaza durante una fiesta nocturna" },
  { src: "/galeria/foto2.jpg", alt: "Operador de cámara en un gran concierto en un pabellón" },
  { src: "/galeria/foto3.jpg", alt: "Cámara en un auditorio durante un concierto de orquesta" },
  { src: "/galeria/foto4.jpg", alt: "Operador de cámara en un estadio de fútbol" },
  { src: "/galeria/foto5.jpg", alt: "Operador de cámara con steadycam en una pista de atletismo" },
  { src: "/galeria/foto6.jpg", alt: "Sony ZV-E10 II con luz LED en un rodaje" },
];

/* ---------- Trabajos: cámara 3D que gira, enciende su pantalla y abre el visor ----------
   Usa three.js desde un CDN (no hace falta instalar nada). */
function TrabajosCamara() {
  const stageRef = useRef<HTMLDivElement>(null);
  const camRef = useRef<HTMLButtonElement>(null);
  const cerradoRef = useRef<() => void>(() => {});
  const lensPointRef = useRef<() => { x: number; y: number } | null>(() => null);
  const busyRef = useRef(false);
  const x0 = useRef<number | null>(null);
  const [listo, setListo] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const [idx, setIdx] = useState(0);
  const [origen, setOrigen] = useState({ x: "50%", y: "50%" });

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).THREE) setListo(true);
  }, []);

  const mover = (d: number) => setIdx((i) => (i + d + FOTOS.length) % FOTOS.length);
  const cerrar = () => {
    setAbierto(false);
    cerradoRef.current();
    camRef.current?.focus();
  };

  /* Teclado y bloqueo de scroll mientras el visor está abierto */
  useEffect(() => {
    if (!abierto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
      if (e.key === "ArrowLeft") mover(-1);
      if (e.key === "ArrowRight") mover(1);
    };
    document.addEventListener("keydown", onKey);
    const previo = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previo;
    };
  }, [abierto]);

  /* Escena 3D */
  useEffect(() => {
    if (!listo) return;
    const stage = stageRef.current!;
    const cam = camRef.current!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fotos = FOTOS;
    function openViewer() {
      const p = lensPointRef.current();
      const r = cam.getBoundingClientRect();
      const x = p ? p.x : r.left + r.width / 2;
      const y = p ? p.y : r.top + r.height / 2;
      setOrigen({ x: x + "px", y: y + "px" });
      setIdx(0);
      setAbierto(true);
    }
    const limpiar = (function () {
  var T=THREE,PI=Math.PI,dead=false,raf=0,autoT=0;
  var renderer=new T.WebGLRenderer({antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
  renderer.outputEncoding=T.sRGBEncoding;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
  renderer.domElement.style.cssText='width:100%;height:100%;display:block';cam.appendChild(renderer.domElement);
  var scene=new T.Scene(),camera=new T.PerspectiveCamera(30,4/3,.1,60),Z0=9.6,Z1=6.2;
  camera.position.set(0,.3,Z0);camera.lookAt(0,0,0);

  /* Entorno de estudio */
  var envS=new T.Scene();envS.background=new T.Color(0x14161d);
  function box(w,h,d,x,y,z,c,k){var m=new T.Mesh(new T.BoxGeometry(w,h,d),new T.MeshBasicMaterial({color:new T.Color(c).multiplyScalar(k)}));m.position.set(x,y,z);envS.add(m)}
  box(12,.4,12,0,7,0,0xffffff,5);box(.4,6,9,-7,1,2,0xffffff,4);box(.4,6,9,7,1,2,0xffffff,3);box(10,5,.4,0,1,9,0xdfe8ff,2.5);box(10,5,.4,0,1,-9,0xdfe8ff,2.5);box(14,.4,14,0,-6,0,0x303544,1);
  var pm=new T.PMREMGenerator(renderer);scene.environment=pm.fromScene(envS,.03).texture;pm.dispose();
  var dl=new T.DirectionalLight(0xffffff,.7);dl.position.set(3,5,6);scene.add(dl);

  /* Texturas */
  function canvasTex(w,h,draw,rep){var c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);var t=new T.CanvasTexture(c);t.wrapS=t.wrapT=T.RepeatWrapping;if(rep)t.repeat.set(rep[0],rep[1]);t.anisotropy=4;return t}
  var leatherBump=canvasTex(256,256,function(g,w,h){g.fillStyle='#808080';g.fillRect(0,0,w,h);for(var i=0;i<3600;i++){var x=Math.random()*w,y=Math.random()*h,r=.8+Math.random()*1.8;g.fillStyle=Math.random()<.5?'rgba(0,0,0,.55)':'rgba(255,255,255,.4)';g.beginPath();g.arc(x,y,r,0,7);g.fill()}},[4,3]);
  var furBump=canvasTex(128,128,function(g,w,h){g.fillStyle='#808080';g.fillRect(0,0,w,h);for(var i=0;i<1400;i++){var x=Math.random()*w,y=Math.random()*h,a=Math.random()*PI*2,l=4+Math.random()*7;g.strokeStyle=Math.random()<.5?'rgba(0,0,0,.6)':'rgba(255,255,255,.55)';g.lineWidth=1.2;g.beginPath();g.moveTo(x,y);g.lineTo(x+Math.cos(a)*l,y+Math.sin(a)*l);g.stroke()}},[3,2]);
  var knurl=function(rep){return canvasTex(64,8,function(g,w,h){g.fillStyle='#000';g.fillRect(0,0,w,h);g.fillStyle='#fff';g.fillRect(0,0,w/2,h)},[rep,1])};
  var sonyTex=canvasTex(256,64,function(g,w,h){g.clearRect(0,0,w,h);g.fillStyle='#d9dce3';g.font='700 52px Georgia,serif';g.textAlign='center';g.textBaseline='middle';g.fillText('SONY',w/2,h/2+2)});
  sonyTex.encoding=T.sRGBEncoding;sonyTex.wrapS=sonyTex.wrapT=T.ClampToEdgeWrapping;

  /* Pantalla trasera: muestra las fotos */
  var sc=document.createElement('canvas');sc.width=600;sc.height=400;var sg=sc.getContext('2d');
  var screenTex=new T.CanvasTexture(sc);screenTex.encoding=T.sRGBEncoding;
  var imgs=FOTOS.map(function(f){var im=new Image();im.onload=function(){dirty=true};im.src=f.src;return im});
  var level=0,photoI=0,dirty=true;
  function drawScreen(){
    sg.fillStyle='#04050a';sg.fillRect(0,0,600,400);
    if(level<.02){var gr=sg.createLinearGradient(0,0,600,400);gr.addColorStop(0,'rgba(255,255,255,.07)');gr.addColorStop(.5,'rgba(255,255,255,0)');sg.fillStyle=gr;sg.fillRect(0,0,600,400)}
    else{
      sg.globalAlpha=level;var im=imgs[photoI];
      if(im&&im.complete&&im.naturalWidth){var s=Math.max(600/im.naturalWidth,400/im.naturalHeight),w=im.naturalWidth*s,h=im.naturalHeight*s;sg.drawImage(im,(600-w)/2,(400-h)/2,w,h)}
      sg.strokeStyle='rgba(255,255,255,.9)';sg.lineWidth=3;
      [[24,24,1,1],[576,24,-1,1],[24,376,1,-1],[576,376,-1,-1]].forEach(function(c){sg.beginPath();sg.moveTo(c[0],c[1]+c[3]*30);sg.lineTo(c[0],c[1]);sg.lineTo(c[0]+c[2]*30,c[1]);sg.stroke()});
      sg.fillStyle='#ffffff';sg.beginPath();sg.arc(52,56,7,0,7);sg.fill();
      sg.fillStyle='#fff';sg.font='600 22px Helvetica,Arial,sans-serif';sg.fillText('REC',68,63);sg.fillText('4K 24p',480,63);
      sg.globalAlpha=1;
    }
    screenTex.needsUpdate=true;dirty=false;
  }

  /* Materiales */
  var body=new T.MeshStandardMaterial({color:0x151618,roughness:.8,metalness:.08,bumpMap:leatherBump,bumpScale:2});
  var topM=new T.MeshStandardMaterial({color:0x1e2024,roughness:.45,metalness:.7});
  var chrome=new T.MeshStandardMaterial({color:0xd7dae0,metalness:1,roughness:.2});
  var satin=new T.MeshStandardMaterial({color:0xaeb2bb,metalness:1,roughness:.36});
  var darkMetal=new T.MeshStandardMaterial({color:0x1a1b1f,metalness:.9,roughness:.34});
  var rubber=new T.MeshStandardMaterial({color:0x0d0d0f,roughness:.7,metalness:.1,bumpMap:knurl(80),bumpScale:2.5});
  var dialMat=new T.MeshStandardMaterial({color:0x2a2c31,metalness:.8,roughness:.4,bumpMap:knurl(36),bumpScale:2});
  var fur=new T.MeshStandardMaterial({color:0x2a2a2d,roughness:1,metalness:0,bumpMap:furBump,bumpScale:5});
  var red=new T.MeshStandardMaterial({color:0xe9e9ea,emissive:0x1a1a1a,roughness:.4});
  var bezel=new T.MeshStandardMaterial({color:0x08090b,metalness:.5,roughness:.25});
  var glass=new T.MeshPhysicalMaterial({color:0x1b1b1d,metalness:0,roughness:.02,clearcoat:1,clearcoatRoughness:.03,transparent:true,opacity:.6,depthWrite:false,envMapIntensity:2.4});

  function rr(w,h,r){var s=new T.Shape(),x=-w/2,y=-h/2;s.moveTo(x+r,y);s.lineTo(x+w-r,y);s.quadraticCurveTo(x+w,y,x+w,y+r);s.lineTo(x+w,y+h-r);s.quadraticCurveTo(x+w,y+h,x+w-r,y+h);s.lineTo(x+r,y+h);s.quadraticCurveTo(x,y+h,x,y+h-r);s.lineTo(x,y+r);s.quadraticCurveTo(x,y,x+r,y);return s}
  function ext(s,d,b){var g=new T.ExtrudeGeometry(s,{depth:d,bevelEnabled:true,bevelThickness:b,bevelSize:b,bevelSegments:4,curveSegments:16});g.center();return g}
  function cyl(r1,r2,h,seg){var g=new T.CylinderGeometry(r1,r2,h,seg||64);g.rotateX(PI/2);return g}
  var root=new T.Group(),cm=new T.Group();root.add(cm);scene.add(root);
  function add(geo,mat,x,y,z,parent){var m=new T.Mesh(geo,mat);m.position.set(x,y,z);(parent||cm).add(m);return m}

  /* Cuerpo (3.0 x 1.83 x 1.25), empuñadura a la izquierda vista de frente */
  add(ext(rr(2.88,1.71,.2),1.13,.06),body,0,0,0);
  add(ext(rr(.7,1.6,.25),.35,.07),body,-1.3,0,.8);
  add(ext(rr(2.9,.2,.07),1.1,.04),topM,0,.93,0);
  /* Micrófono con cubierta de pelo, zapata, botón REC, disparador con zoom y rueda de modo */
  add(ext(rr(1.35,.42,.2),.7,.08),fur,.35,1.2,.12);
  add(new T.BoxGeometry(.55,.07,.38),chrome,.35,1.03,-.5);
  add(new T.CylinderGeometry(.09,.09,.06,32),red,-.95,1.07,.4);
  add(new T.CylinderGeometry(.12,.12,.12,32),chrome,-1.25,1.1,.05);
  add(new T.TorusGeometry(.2,.04,12,40).rotateX(PI/2),darkMetal,-1.25,1.07,.05);
  add(new T.CylinderGeometry(.2,.2,.1,48),dialMat,-.55,1.08,-.3);
  /* Rótulo y piloto frontales */
  var lab=new T.Mesh(new T.PlaneGeometry(.62,.16),new T.MeshBasicMaterial({map:sonyTex,transparent:true}));lab.position.set(1.05,.55,.632);cm.add(lab);
  add(new T.SphereGeometry(.04,16,12),red,1.28,.78,.63);

  /* Montura y objetivo zoom 16-50 */
  var lx=.1,ly=-.05,zf=.625;
  add(cyl(.78,.78,.14),satin,lx,ly,zf+.07);
  add(cyl(.64,.64,.35),darkMetal,lx,ly,zf+.14+.175);
  add(cyl(.68,.68,.3,96),rubber,lx,ly,zf+.14+.35+.15);
  add(cyl(.55,.6,.3),darkMetal,lx,ly,zf+.14+.35+.3+.15);
  add(cyl(.5,.5,.12),darkMetal,lx,ly,zf+.14+.35+.3+.3+.06);
  var zr=zf+.14+.35+.3+.3+.12;
  add(new T.TorusGeometry(.5,.025,12,64),chrome,lx,ly,zr);
  add(new T.CircleGeometry(.47,48),new T.MeshStandardMaterial({color:0x07080f,metalness:.6,roughness:.4}),lx,ly,zr-.3);
  var c1=add(new T.CircleGeometry(.4,48),new T.MeshBasicMaterial({color:0x5a5a5e,transparent:true,opacity:.55}),lx,ly,zr-.1);
  add(new T.CircleGeometry(.32,48),new T.MeshBasicMaterial({color:0x8a8a8f,transparent:true,opacity:.55}),lx,ly,zr-.18);
  var iris=add(new T.CircleGeometry(.16,6),new T.MeshBasicMaterial({color:0x000000}),lx,ly,zr-.26);
  var R=1,half=Math.asin(.47/R),gl=new T.Mesh(new T.SphereGeometry(R,64,24,0,PI*2,0,half),glass);
  gl.rotation.x=PI/2;gl.position.set(lx,ly,zr-Math.sqrt(R*R-.47*.47));cm.add(gl);

  /* Pantalla trasera abatible (bisagra en el lado izquierdo del fotógrafo) */
  var hinge=new T.Group();hinge.position.set(1.46,-.12,-.665);cm.add(hinge);
  add(ext(rr(1.64,1.12,.1),.05,.02),bezel,-.82,0,0,hinge);
  var pg=new T.PlaneGeometry(1.5,1.0);pg.rotateY(PI);
  var screen=add(pg,new T.MeshBasicMaterial({map:screenTex,toneMapped:false}),-.82,0,-.056,hinge);

  root.rotation.x=-.1;

  function resize(){var w=stage.clientWidth,h=stage.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()}
  var ro=new ResizeObserver(resize);ro.observe(stage);resize();

  /* Animación: vuelta 360° (y media) → pantalla se abre y se enciende → fotos → visor */
  function ease(p){p=Math.min(Math.max(p,0),1);return p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2}
  var mode='idle',t0=0,irisK=1,irisT=1,px=0,py=0,tilt={x:0,y:0},visible=true,seen=false,flipK=0,flipT=0,screenT=0,
      SPIN=2600,DOLLY=900,BACK=900,FOTO=650;
  var onMove=function(e){var r=stage.getBoundingClientRect();px=((e.clientX-r.left)/r.width-.5)*2;py=((e.clientY-r.top)/r.height-.5)*2};stage.addEventListener('pointermove',onMove);
  var onLeave=function(){px=0;py=0};stage.addEventListener('pointerleave',onLeave);
  var io=new IntersectionObserver(function(es){visible=es[0].isIntersecting;if(visible&&!seen&&es[0].intersectionRatio>=.6){seen=true;autoT=setTimeout(play,700)}},{threshold:[0,.6]});io.observe(stage);

  function play(){if(busyRef.current)return;busyRef.current=true;t0=performance.now();mode=reduce?'flip':'spin'}
  cerradoRef.current=function(){mode='back';t0=performance.now();irisT=1;flipT=0;screenT=0};
  cam.onclick=play;

  lensPointRef.current=function(){
    var v=new T.Vector3();screen.getWorldPosition(v);v.project(camera);var r=cam.getBoundingClientRect();
    return {x:r.left+(v.x*.5+.5)*r.width,y:r.top+(-v.y*.5+.5)*r.height};
  };

  function frame(now){
    if(dead)return;raf=requestAnimationFrame(frame);
    if(!visible&&mode==='idle')return;
    var t=now/1000,ry;
    tilt.x+=((py*.1)-tilt.x)*.06;tilt.y+=((px*.3)-tilt.y)*.06;
    if(mode==='idle')ry=Math.sin(t*.7)*.28;
    else ry=3*PI+Math.sin(t*.8)*.05;
    if(mode==='spin'){
      var p=(now-t0)/SPIN;ry=ease(p)*3*PI;if(p>.5)irisT=2.3;
      if(p>=1){mode='flip';t0=now}
    }
    if(mode==='flip'){flipT=1;if(now-t0>700){screenT=1;mode='show';t0=now}}
    if(mode==='show'){
      var i=Math.floor((now-t0)/FOTO)%fotos.length;if(i!==photoI){photoI=i;dirty=true}
      if(now-t0>FOTO*4){mode='dolly';t0=now}
    }
    if(mode==='dolly'){
      var d=(now-t0)/DOLLY;camera.position.z=Z0+(Z1-Z0)*ease(d);
      if(d>=1){mode='hold';openViewer()}
    }
    if(mode==='back'){
      var b=(now-t0)/BACK,e=ease(b);camera.position.z=Z1+(Z0-Z1)*e;ry=3*PI+e*PI;
      if(b>=1){mode='idle';busyRef.current=false;camera.position.z=Z0;photoI=0;flipK=0;level=0;dirty=true}
    }
    flipK+=(flipT-flipK)*.1;hinge.rotation.y=-flipK*.62;
    var nl=level+(screenT-level)*.1;if(Math.abs(nl-level)>.001){level=nl;dirty=true}
    if(dirty)drawScreen();
    irisK+=(irisT-irisK)*.08;iris.scale.set(irisK,irisK,1);
    c1.material.opacity=.55+(irisK-1)*.1;
    cm.rotation.y=ry+tilt.y;cm.rotation.x=tilt.x;
    camera.lookAt(0,0,0);
    renderer.render(scene,camera);
  }
  raf=requestAnimationFrame(frame);
  return function(){dead=true;cancelAnimationFrame(raf);clearTimeout(autoT);ro.disconnect();io.disconnect();stage.removeEventListener('pointermove',onMove);stage.removeEventListener('pointerleave',onLeave);cam.onclick=null;renderer.dispose();if(renderer.domElement.parentNode)renderer.domElement.parentNode.removeChild(renderer.domElement)};

    })();
    return limpiar;
  }, [listo]);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        strategy="afterInteractive"
        onReady={() => setListo(true)}
      />

      <div
        ref={stageRef}
        className="relative mx-auto mt-10 aspect-[4/3] w-[min(92vw,640px)] rounded-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 52%, #3b404d 0%, #151822 60%, #0C0F1A 100%)",
        }}
      >
        <div
          className="absolute bottom-[17%] left-[18%] right-[18%] h-[9%] rounded-[50%]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,0,0,.6), transparent 70%)",
            filter: "blur(6px)",
          }}
        />
        <button
          ref={camRef}
          aria-label="Abrir portfolio de trabajos"
          onClick={listo ? undefined : () => setAbierto(true)}
          className="absolute inset-0 z-[1] h-full w-full cursor-pointer rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        />
      </div>
      <p className="mt-6 text-white/70">Toca la cámara para ver mis trabajos</p>

      {/* Visor: se abre en círculo desde la pantalla de la cámara */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Portfolio de trabajos"
        aria-hidden={!abierto}
        className="fixed inset-0 z-[70] flex flex-col bg-black text-left text-white"
        style={{
          clipPath: abierto
            ? `circle(160vmax at ${origen.x} ${origen.y})`
            : `circle(0px at ${origen.x} ${origen.y})`,
          visibility: abierto ? "visible" : "hidden",
          transition: `clip-path .9s cubic-bezier(.6,0,.2,1), visibility 0s linear ${abierto ? "0s" : ".9s"}`,
        }}
        onPointerDown={(e) => {
          x0.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (x0.current === null) return;
          const d = e.clientX - x0.current;
          x0.current = null;
          if (Math.abs(d) > 50) mover(d < 0 ? 1 : -1);
        }}
      >
        <div className="flex items-center justify-between px-5 pb-2 pt-5 text-sm tracking-widest">
          <span>
            {idx + 1} / {FOTOS.length}
          </span>
          <button
            onClick={cerrar}
            className="rounded-full border border-white/50 px-5 py-2 font-semibold hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Cerrar
          </button>
        </div>

        <div className="flex min-h-0 flex-1 items-center justify-center gap-3 px-3 py-2">
          <button
            onClick={() => mover(-1)}
            aria-label="Foto anterior"
            className="hidden h-12 w-12 shrink-0 rounded-full border border-white/50 text-xl hover:bg-white hover:text-black sm:block"
          >
            ‹
          </button>
          <img
            key={idx}
            src={FOTOS[idx].src}
            alt={FOTOS[idx].alt}
            draggable={false}
            className="select-none rounded-lg object-contain"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
          <button
            onClick={() => mover(1)}
            aria-label="Foto siguiente"
            className="hidden h-12 w-12 shrink-0 rounded-full border border-white/50 text-xl hover:bg-white hover:text-black sm:block"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center gap-2 overflow-x-auto px-3 pb-5 pt-2">
          {FOTOS.map((f, i) => (
            <button
              key={f.src}
              onClick={() => setIdx(i)}
              aria-label={`Ver foto ${i + 1}`}
              aria-current={i === idx}
              className={`h-12 w-[72px] shrink-0 overflow-hidden rounded-md border-2 ${
                i === idx ? "border-white opacity-100" : "border-transparent opacity-55"
              }`}
            >
              <img src={f.src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default function Home() {
  const reduce = useReducedMotion();
  const lineas = ["Cámara y realización", "para eventos, conciertos", "y empresas."];

  return (
    <main className={`${body.className} overflow-x-hidden bg-[#EEF0F4] text-[#0C0F1A]`}>
      <Intro />
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#0C0F1A] text-white">
        {/* Pon tu reel en /public/reel.mp4 (sin audio, 15-20 s, menos de 8 MB) */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay={!reduce}
          muted
          loop
          playsInline
          preload="metadata"
          poster="/steadycam.jpg"
          aria-hidden="true"
        >
          <source src="/reel.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F1A] via-[#0C0F1A]/40 to-[#0C0F1A]/50" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:pb-24">
          <h1
            className={`${display.className} text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-8xl`}
          >
            {lineas.map((linea, i) => (
              <span key={linea} className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {linea}
                </motion.span>
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/85 md:text-xl">
            Soy MK Audiovisual. Grabo y realizo tus eventos y proyectos con
            equipo propio y trato directo.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="rounded-full bg-[#2433FF] px-8 py-3.5 font-semibold text-white transition hover:bg-[#3a48ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Pedir presupuesto
            </a>
            <a
              href="#trabajos"
              className="rounded-full border border-white/70 px-8 py-3.5 font-semibold transition hover:bg-white hover:text-[#0C0F1A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Ver trabajos
            </a>
            <a href="#disponibilidad" className="text-white/85 underline underline-offset-4 hover:text-white">
              Consultar disponibilidad
            </a>
          </div>
        </div>
      </section>

      {/* ================= SOBRE MÍ + SERVICIOS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2
              className={`${display.className} text-4xl font-extrabold leading-tight tracking-tight md:text-5xl`}
            >
              Sobre mí
            </h2>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-[#5B6070]">
              Soy técnico de vídeo especializado en operador de cámara,
              realización y producción audiovisual. Trabajo en eventos,
              conciertos y proyectos profesionales para marcas, empresas y
              producciones audiovisuales.
            </p>
          </div>

          <ul className="border-b border-[#0C0F1A]/15 lg:col-span-7">
            {servicios.map(([titulo, texto]) => (
              <li
                key={titulo}
                className="group grid gap-2 border-t border-[#0C0F1A]/15 py-8 transition-colors hover:text-[#2433FF] md:grid-cols-2 md:gap-8"
              >
                <h3
                  className={`${display.className} text-3xl font-bold leading-tight tracking-tight md:text-4xl`}
                >
                  {titulo}
                </h3>
                <p className="text-[#5B6070] md:self-center">{texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= TRABAJOS ================= */}
      <section id="trabajos" className="bg-[#0C0F1A] px-6 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-7xl">
          <h2
            className={`${display.className} text-4xl font-extrabold leading-tight tracking-tight md:text-6xl`}
          >
            Trabajos
          </h2>
          <TrabajosCamara />
          <p className="mt-10 text-white/70">
            Más trabajos en{" "}
            <a
              href="https://www.instagram.com/mk.audiovisual_/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline underline-offset-4"
            >
              @mk.audiovisual_
            </a>
          </p>
        </div>
      </section>

      {/* ================= DISPONIBILIDAD ================= */}
      <section id="disponibilidad" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Disponibilidad />
        </div>
      </section>

      {/* ================= CONTACTO ================= */}
      <section id="contacto" className="bg-[#2433FF] px-6 py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2
              className={`${display.className} text-4xl font-extrabold leading-tight tracking-tight md:text-6xl`}
            >
              Cuéntame tu proyecto
            </h2>
            <p className="mt-6 max-w-sm text-lg text-white/90">
              Dime qué necesitas y para qué fecha. Te respondo con
              disponibilidad y presupuesto.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-7 py-3.5 font-semibold text-[#2433FF] transition hover:bg-[#EEF0F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Escríbeme por WhatsApp
              </a>
              <a
                href="tel:+34636893279"
                className="text-lg underline underline-offset-4 hover:text-white/80"
              >
                {TELEFONO}
              </a>
              <a
                href="https://www.instagram.com/mk.audiovisual_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg underline underline-offset-4 hover:text-white/80"
              >
                @mk.audiovisual_
              </a>
            </div>
          </div>

          <form
            action="https://formspree.io/f/mzdwzpjr"
            method="POST"
            className="space-y-7 lg:col-span-7"
          >
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm text-white/85">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full border-b border-white/60 bg-transparent py-3 text-lg outline-none transition focus:border-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-white/85">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full border-b border-white/60 bg-transparent py-3 text-lg outline-none transition focus:border-white"
                />
              </div>
              <div>
                <label htmlFor="tipo" className="text-sm text-white/85">
                  Tipo de trabajo
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  defaultValue="Evento"
                  className="mt-1 w-full border-b border-white/60 bg-transparent py-3 text-lg outline-none transition focus:border-white [&>option]:text-[#0C0F1A]"
                >
                  <option>Evento</option>
                  <option>Concierto</option>
                  <option>Empresa o marca</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label htmlFor="fecha" className="text-sm text-white/85">
                  Fecha prevista
                </label>
                <input
                  id="fecha"
                  name="fecha"
                  type="date"
                  className="mt-1 w-full border-b border-white/60 bg-transparent py-3 text-lg outline-none transition [color-scheme:dark] focus:border-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-sm text-white/85">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full resize-none border-b border-white/60 bg-transparent py-3 text-lg outline-none transition focus:border-white"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#0C0F1A] px-12 py-4 font-semibold text-white transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              Enviar mensaje
            </button>
          </form>
        </div>

        <p className="mx-auto mt-24 max-w-7xl text-sm text-white/80">
          © 2026 MK Audiovisual
        </p>
      </section>

    </main>
  );
}
