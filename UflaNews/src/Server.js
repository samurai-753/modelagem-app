const SERVER_URL = 'http://192.168.0.19:3000'; // USE O IP DA SUA MÁQUINA AQUI

//OK
export async function getBoletins(publicadores) {
    console.log("publicadores", publicadores)
    let ids = ''
    publicadores.map((x) => ids += `publicadorId=${x}&`)
    let url = `${SERVER_URL}/boletims?${ids}`
    let res = await fetch(url, { headers: { "cache-control": "no-cache" } })

    // TODO: Colocar os boletins na tela
    let boletins = await res.json()

    // console.log("SERVER boletins", boletins);
    return boletins
}
//OK
export async function getBoletim(id) {
    let url = `${SERVER_URL}/boletims?id=${id}`
    let res = await fetch(url, { headers: { "cache-control": "no-cache" } })

    // TODO: Colocar os boletins na tela
    let boletins = await res.json();
    if (boletins.length > 0) {
        console.log("boletin", boletins[0])
        return boletins[0];
    }
    return null;
}
//OK
export async function getComentarios(id) {
    let url = `${SERVER_URL}/comentarios?boletimId=${id}`
    // console.log("SERVER URL", url)
    let res = await fetch(url, { headers: { "cache-control": "no-cache" } })

    let comentarios = await res.json()
    // console.log("SERVER comentario server", comentarios)
    // console.log("SERVER comentarios", comentarios);
    return comentarios
}
//OK
export async function getPublicador(id) {
    let url = `${SERVER_URL}/publicadors?id=${id}`
    let res = await fetch(url, { headers: { "cache-control": "no-cache" } })

    let publicadores = await res.json()
    // console.log("SERVER publicadores[0]", publicadores[0]);
    return publicadores[0]
}
//OK
export async function getPublicadores(publicadores) {
    let url = `${SERVER_URL}/publicadors`
    if (publicadores) {
        let ids = ''
        publicadores.map((x) => ids += `id=${x.publicadorId}&`)
        url = url + "?" + ids;
    }
    let res = await fetch(url, { headers: { "cache-control": "no-cache" } })

    let retorno = await res.json()
    // console.log("url", url);
    // console.log("SERVER retorno", retorno);
    return retorno
}
//OK
export async function login(email, password) {
    console.log({ email, password });
    let url = `${SERVER_URL}/usuarios?email=${email}`
    console.log(url);
    let res = await fetch(url, { headers: { "cache-control": "no-cache" } })
    console.log("res: " + res);

    let json = await res.json()
    let usuario = json[0]
    // console.log("SERVER login", usuario)

    if (usuario.senha === password) {
        // console.log("SERVER usuario", usuario);
        return usuario
    }

    throw 'Senha ou usário invalido'
}

//ok
export async function cadastrar(usuario_dados) {
    let url = `${SERVER_URL}/usuarios`
    let res = await fetch(
        url,
        {
            method: 'POST',
            headers: { "cache-control": "no-cache", 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario_dados)
        }
    );

    let usuario = await res.json()
    // console.log("SERVER usuario", usuario);
    return usuario
}
//ok
export async function alterarPerfil(usuario_dados) {
    let url = `${SERVER_URL}/usuarios/${usuario_dados.id}`
    let res = await fetch(
        url,
        {
            method: 'PUT',
            headers: { "cache-control": "no-cache", 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario_dados)
        }
    );

    let usuario = await res.json()
    // console.log("SERVER usuario", usuario);
    return usuario
}
//ok
export async function postarComentario(usuario_id, boletim_id, txt_comentario) {
    let date = new Date();
    let mes = date.getMonth() + 1;
    let date_str = date.getFullYear() + "-" + mes + "-" + date.getDate() + "T" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    let comentario = {
        usuarioId: usuario_id,
        boletimId: boletim_id,
        comentario: txt_comentario,
        data: date_str
    };
    let url = `${SERVER_URL}/comentarios`
    let res = await fetch(
        url,
        {
            method: 'POST',
            headers: { "cache-control": "no-cache", 'Content-Type': 'application/json' },
            body: JSON.stringify(comentario)
        }
    );

    let retorno = await res.json()
    // console.log("SERVER comentario", retorno);
    return retorno
}
//ok
export async function excluirComentario(comentarioId) {
    let url = `${SERVER_URL}/comentarios/${comentarioId}`
    let res = await fetch(
        url,
        {
            method: 'DELETE',
            headers: { "cache-control": "no-cache", 'Content-Type': 'application/json' },
            // body: JSON.stringify(like)
        }
    );

    let retorno = await res.json()
    // console.log("SERVER like", retorno);
    return retorno
}
//OK WTF: USUARIOID
export async function getLike(boletim_id, usuario_id) {
    console.log("boletim: "+ boletim_id + "\nurusario: " + usuario_id);
    let url = `${SERVER_URL}/likes?boletimId=${boletim_id}`;
    if (usuario_id != undefined) {
        url += `&usuarioId=${usuario_id}`;
    }
    let res = await fetch(
        url,
        {
            method: 'GET',
            headers: { "cache-control": "no-cache", 'Content-Type': 'application/json' },
        }
    );
    let retorno = await res.json()
    // console.log("URL LIKE", url);
    // console.log("SERVER like", retorno);
    return retorno
}
//ok
export async function darLike(boletimId, usuarioId) {
    let like = {
        usuarioId: usuarioId,
        boletimId: boletimId,
    };
    console.log("like: ", like);

    let url = `${SERVER_URL}/likes`
    let res = await fetch(
        url,
        {
            method: 'POST',
            headers: { "cache-control": "no-cache", 'Content-Type': 'application/json' },
            body: JSON.stringify(like)
        }
    );

    let retorno = await res.json()
    // console.log("SERVER like", retorno);
    return retorno
}
//ok
export async function tirarLike(likeId) {
    let url = `${SERVER_URL}/likes/${likeId}`
    let res = await fetch(
        url,
        {
            method: 'DELETE',
            headers: { "cache-control": "no-cache", 'Content-Type': 'application/json' },
            // body: JSON.stringify(like)
        }
    );

    let retorno = await res.json()
    // console.log("SERVER like", retorno);
    return retorno
}
//ok
export async function ehSeguidor(publicadorId, usuario_id) {

    let url = `${SERVER_URL}/seguidores?publicadorId=${publicadorId}`;
    if (usuario_id != undefined) {
        url += `&usuarioId=${usuario_id}`;
    }
    let res = await fetch(
        url,
        {
            method: 'GET',
            headers: { "cache-control": "no-cache", 'Content-Type': 'application/json' },
        }
    );
    let retorno = await res.json()
    // console.log("URL SEGUIDORES", url);
    // console.log("SERVER SEGUIDORES", retorno);
    return retorno
}

//ok
export async function seguir(publicadorId, usuarioId) {
    let seguir = {
        usuarioId: usuarioId,
        publicadorId: publicadorId,
    };
    let url = `${SERVER_URL}/seguidores`
    let res = await fetch(
        url,
        {
            method: 'POST',
            headers: { "cache-control": "no-cache", 'Content-Type': 'application/json' },
            body: JSON.stringify(seguir)
        }
    );

    let retorno = await res.json()
    // console.log("SERVER seguir", retorno);
    return retorno
}
//ok
export async function deixarDeSeguir(seguirId) {
    let url = `${SERVER_URL}/seguidores/${seguirId}`
    let res = await fetch(
        url,
        {
            method: 'DELETE',
            headers: { "cache-control": "no-cache", 'Content-Type': 'application/json' },
            // body: JSON.stringify(like)
        }
    );

    let retorno = await res.json()
    // console.log("SERVER like", retorno);
    return retorno
}
