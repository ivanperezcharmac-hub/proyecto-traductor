# 🌐 Traductor en Tiempo Real

App de traducción en tiempo real con modo texto y voz en vivo, construida con HTML/CSS/JS puro y la API de Anthropic.

## ✨ Features

- **Modo Texto** — traducción automática mientras escribís (sin botón)
- **Modo Voz en Vivo** — micrófono continuo, ideal para entrevistas o reuniones
- **Texto a voz** — escuchá la traducción en el idioma destino
- **Modo oscuro / claro**
- **9 idiomas** con detección automática del idioma de origen
- **Historial de sesión**

## 🚀 Uso

1. Abrí la app en [ivanperezcharmac-hub.github.io/proyecto-traductor](https://ivanperezcharmac-hub.github.io/proyecto-traductor)
2. Ingresá tu API key de Anthropic (se guarda solo en tu navegador)
3. Traducí

## 🔑 API Key

Obtené tu key en [console.anthropic.com/keys](https://console.anthropic.com/keys).  
La key se almacena únicamente en `localStorage` de tu navegador. Nunca se envía a ningún servidor propio.

## 🎙️ Voz en vivo

Usa la Web Speech API del navegador. Funciona mejor en **Chrome** o **Edge**.  
Para traducir lo que dice otra persona en una videollamada, usá auriculares y acercá el micrófono al parlante.

## 🛠️ Stack

- HTML / CSS / JS puro (sin frameworks)
- [Anthropic API](https://docs.anthropic.com) — modelo `claude-haiku-4-5`
- Web Speech API (reconocimiento de voz nativo del navegador)
- GitHub Pages (hosting)
