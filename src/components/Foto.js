import React, {Component} from 'react'

class FotoHeader extends Component {
    render() {
        return (
            <header className="foto-header">
                <figure className="foto-usuario">
                <img src={this.props.fotoPerfil} alt="foto do usuario" />
                <figcaption className="foto-usuario">
                    <a href="#">
                    {this.props.usuario}
                    </a>  
                </figcaption>
                </figure>
                <time className="foto-data">{this.props.dataHota}</time>
            </header> 
        )
    }
}

class FotoInfo extends Component {

    textoLike() {
        if (this.props.likers.length === 0) {
            return ''
        } else if (this.props.likers.length === 1) {
            return ' curtiu'
        } else if (this.props.likers.length > 1) {
            return ' curtiram'
        }
    }

    render() {
        return (
            <div className="foto-info">
                <div className="foto-info-likes">
                {
                    this.props.likers.map((liker, index) =>
                        this.props.likers.length === (index + 1)
                        ? <a key={index} href="#">{liker.login}</a>
                        : <a key={index} href="#">{liker.login}, </a>
                    )
                }

                { this.textoLike() }

                </div>

                <p className="foto-info-legenda">
                    <a className="foto-info-autor">{this.props.autor} </a>
                    {this.props.legenda}
                </p>

                <ul className="foto-info-comentarios">
                    {
                        this.props.comentarios.map((comentario, index) =>
                            <li key={index} className="comentario">
                                <a className="foto-info-autor">{comentario.login} </a>
                                {comentario.texto}
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

class FotoAtualizacoes extends Component {
    render() {
        return (
            <section className="fotoAtualizacoes">
                <a href="#" className="fotoAtualizacoes-like">Likar</a>
                <form className="fotoAtualizacoes-form">
                <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo" />
                <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit" />
                </form>

            </section>
        )
    }
}

export default class Foto extends Component {
    render() {
        return (
            <div className="foto">
                <FotoHeader fotoPerfil={this.props.foto.urlPerfil} usuario={this.props.foto.loginUsuario} dataHota={this.props.foto.horario} />
    
                <img alt="foto" className="foto-src" 
                src={this.props.foto.urlFoto} />
    
                <FotoInfo likers={this.props.foto.likers} comentarios={this.props.foto.comentarios}
                legenda={this.props.foto.comentario} autor={this.props.foto.loginUsuario} />    
                <FotoAtualizacoes />
            </div>/*fim .foto*/
        )
    }
}