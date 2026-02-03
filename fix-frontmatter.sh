#!/bin/bash

# Script para arreglar el frontmatter de los posts de Medalblog

cd src/content/blog/es

for file in consejos-programadores-p1.md consejos-programadores-p2.md consejos-programadores-p3.md \
            mi-historia-developer.md recursos-gratis-programacion.md que-es-una-api.md \
            power-automate-pasoapaso.md herramientas-mejorar-p1.md porque-un-blog.md \
            django-vs-flask.md herramientas-mejorar-leetcode.md herramientas-mejorar-p2.md \
            integracion-transbank-tutorial.md; do
    
    if [ -f "$file" ]; then
        echo "Procesando $file..."
        # Quitar comillas de pubDate
        sed -i "s/pubDate: '\([^']*\)'/pubDate: \1/" "$file"
        # Quitar comillas de author
        sed -i 's/author: "\([^"]*\)"/author: \1/' "$file"
    fi
done

echo "¡Listo!"
