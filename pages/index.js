import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss'
import AppLayout from '../components/AppLayout' 
import { Component } from 'react';
import 'isomorphic-fetch'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      user_name: '',
      user_mail: '',
      user_message: ''
    };
  }

  handleChange = evt => {  
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(this.state)
      })
      .then(response => response.json())
      .then(data => this.setState({
        user_name:'', user_mail:'', user_message:''
      }))
      .catch(error => console.log(error))
  };  

  render(){
    return (
      <>
        <Head>
          <title>Ariel Blas | Home</title>
        </Head>

        <AppLayout>
          <div id="main" className={styles.homeContainer}>
            <div className={`container ${styles.mainContainer}`}>
              <div className={styles.titleContainer}>
                <h2>Hola, soy Ariel Blas</h2>
                <h3>Full stack developer</h3>
                <div className={styles.buttonLinkContainer}>
                  <Link href="/#contacto"><a className={styles.buttonLink}>Contactarme</a></Link>
                  <Link href="/portafolio"><a className={styles.buttonLink}>Ver mi portafolio</a></Link>
                </div>
              </div>
              <div className={styles.imgContainer}>
                <img src="office-work.png" alt="office-work" className={styles.imgMain}/>
              </div>
            </div>
            <div className={styles.olaMain}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}><path d="M0.00,49.99 C150.00,150.00 349.21,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#fff'}}></path></svg>
            </div>
          </div>
          <div id="sobre_mi" className={styles.homeContainer}>
            <div className={`container ${styles.articleContainer}`}>
              <div className={styles.about_me_title}>
                <h2>Sobre mi</h2>
              </div>
              <div className={styles.about_me_content}>
                <p>
                  Siempre me interesó resolver problemas y desde que descubrí la programación pude tener las herramientas para lograr mis objetivos. Ya después de la secundaria me propuse ser un Full Stack Developer y ahí fue cuando conocí Plataforma 5 un Coding Bootcamp de 800 hs. Hoy en día estoy en búsqueda de mi primer trabajo en la industria del desarrollo, para seguir aprendiendo y perfeccionar mis habilidades, tanto técnicas como blandas.
                </p>
                <a href="Ariel_Blas_CV.pdf" download="Ariel_Blas_CV.pdf">Descargar CV</a>
              </div>            
            </div>         
          </div>
          <div id="servicios" className={styles.homeContainer}>
            <div className={`container ${styles.articleContainer}`}>
              <div className={styles.about_me_title}>
                <h2>Servicios</h2>
              </div>
              <div className={styles.service_content}>
                <div className={styles.service_card}>
                  <div className={styles.cardContainer}>
                    <h3>Front End</h3>
                    <div className={styles.listContainer}>
                      <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Webpack</li>
                        <li>HTML</li>
                        <li>Javascript</li>
                        <li>Css, Sass, Flexbox</li>
                      </ul>
                      <ul>
                        <li>Styled-Components</li>
                        <li>Bootstrap</li>
                        <li>JQuery, Ajax</li>
                        <li>Socket.io</li>
                        <li>Gatsby</li>
                        <li>Next.js</li>
                      </ul>
                    </div>                  
                  </div>
                </div>
                <div className={styles.service_card}>
                  <div className={styles.cardContainer}>
                    <h3>Backend End</h3>
                    <div className={styles.listContainer}>
                      <ul>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                        <li>Passport.js</li>                      
                      </ul>
                      <ul>
                        <li>MySQL</li>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>Laravel</li>
                      </ul>
                    </div>  
                  </div>
                </div>
                <div className={styles.service_card}>
                  <div className={styles.cardContainer}>
                    <h3>Otros</h3>
                    <div className={styles.listContainer}>
                      <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                      </ul>
                      <ul>
                        <li>Scrum</li>
                        <li>TDD</li>
                      </ul>
                    </div>  
                  </div>
                </div>
              </div>    
            </div>         
          </div>
          <div id="contacto" className={styles.homeContainer}>
            <div className={`container ${styles.articleContainer}`}>
              <div className={styles.about_me_title}>
                <h2>Contacto</h2>
                <div className={styles.formContainer}>
                  <form onSubmit={this.handleSubmit}>
                      <div className={styles.inputContainer}>
                        <div className={styles.user_box}>                  
                          <input type="text" id="name" name="user_name" value={this.state.user_name} onChange={this.handleChange} required/>
                          <label htmlFor="name">Nombre</label>
                        </div>
                        <div className={styles.user_box}>                        
                          <input type="email" id="mail" name="user_mail" value={this.state.user_mail} onChange={this.handleChange} className={`${this.state.user_mail ? styles.input_email : ''}`} required/>
                          <label htmlFor="mail">Correo electrónico</label>
                        </div>
                      </div>
                      
                      <div className={styles.textareaContainer}>
                        <textarea id="msg" name="user_message" value={this.state.user_message} onChange={this.handleChange} required></textarea>
                        <label htmlFor="msg">Mensaje</label>
                      </div>
                      
                      <input type="submit" value="Enviar"/>
                  </form>
                </div>
              </div>            
            </div>         
          </div>
        </AppLayout>     
      </>
    )
    }
}
