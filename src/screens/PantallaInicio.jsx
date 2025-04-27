import React, { useEffect, useRef } from "react";
import p5 from "p5";
import "../screens/stylesGlobal.css";
import "../screens/pantallaInicio.css";
import { Link } from "react-router-dom";

const PantallaInicio = () => {
  const p5Container = useRef(null);
  const p5Instance = useRef(null);

  const handleButtonClick = () => {
    const audio = new Audio('/assets/Botones/boton.mp3');
    audio.play();
  };

  useEffect(() => {
    if (p5Instance.current) return; // Evita múltiples instancias

    const sketch = (p) => {
      let particles = [];

      p.setup = () => {
        const cnv = p.createCanvas(p.windowWidth, p.windowHeight);
        cnv.id("canvasFondo");
        cnv.parent(p5Container.current);
        for (let i = 0; i < 150; i++) {
          particles.push(new Particle(p.random(p.width), p.random(p.height), p));
        }
      };

      p.draw = () => {
        p.background(0, 50);
        particles.forEach(particle => {
          particle.update();
          particle.display();
        });
        p.noStroke();
        p.fill(255, 250, 150, 100);
        p.ellipse(p.mouseX, p.mouseY, 20, 20);
        p.filter(p.BLUR, 2);
      };

      class Particle {
        constructor(x, y, p) {
          this.p = p;
          this.x = x;
          this.y = y;
          this.velocity = p5.Vector.random2D().setMag(1);
          this.acceleration = p5.Vector.random2D().setMag(0.02);
          this.maxForce = 0.1;
          this.color = p.color(250, 5, 100, 120);
          this.radius = 9;
        }

        update() {
          this.velocity.add(this.acceleration);
          this.velocity.limit(3);
          this.x += this.velocity.x;
          this.y += this.velocity.y;
          this.edges();
          this.seek();
          this.colorChange();
        }

        display() {
          this.p.noStroke();
          this.p.fill(this.color);
          this.p.ellipse(this.x, this.y, this.radius * 2);
        }

        edges() {
          if (this.x < this.radius || this.x > this.p.width - this.radius) this.velocity.x *= -1;
          if (this.y < this.radius || this.y > this.p.height - this.radius) this.velocity.y *= -1;
        }

        seek() {
          const target = this.p.createVector(this.p.mouseX, this.p.mouseY);
          const pos = this.p.createVector(this.x, this.y);
          const d = p5.Vector.dist(pos, target);
          if (d < 300) {
            const desired = p5.Vector.sub(target, pos).setMag(2);
            const steer = p5.Vector.sub(desired, this.velocity).limit(this.maxForce * 0.5);
            this.applyForce(steer);
          }
        }

        colorChange() {
          const d = this.p.dist(this.x, this.y, this.p.mouseX, this.p.mouseY);
          const r = this.p.map(d, 0, 250, 255, 100);
          const g = this.p.map(d, 0, 1000, 255, 0);
          const b = this.p.map(d, 0, 2500, 100, 255);
          const a = this.p.map(d, 0, 1500, 255, 0);
          this.color = this.p.color(r, g, b, a);
        }

        applyForce(force) {
          this.acceleration.add(force);
        }
      }
    };

    p5Instance.current = new p5(sketch);

    return () => {
      p5Instance.current.remove();
      p5Instance.current = null;
    };
  }, []);

  return (
    <>
      <div ref={p5Container} style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }} />
      <div className="contenedor-inicio">
        <h1>Universidad Veracruzana</h1>
        <h2>Centro de Estudios de Recursos Energéticos y Sustentables</h2>
        <h3>CIRESGAMES</h3>
        <input type="text" placeholder="Ingresar tu nombre" className="input-nombre" />
      </div>

      <div className="botones-principales">
      <Link to="/juegos">
    <button className="boton-accion" onClick={handleButtonClick}>Iniciar</button>
      </Link>        
      <Link to="/creditos">
          <button className="boton-accion" onClick={handleButtonClick}>Créditos</button>
        </Link>
      </div>

      <div className="boton-salir">
        <button className="boton-accion" onClick={handleButtonClick}>Salir</button>
      </div>

    <div className="contenedor-iconos">
    <a href="https://www.uv.mx/" target="_blank" className="icono-uv" rel="noreferrer"></a>
    <div className="icono-sonido" id="iconoSonido"></div>
    </div>
    </>
  );
};

export default PantallaInicio;
