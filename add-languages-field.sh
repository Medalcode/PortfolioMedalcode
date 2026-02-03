#!/bin/bash

# Script para agregar el campo languages a los posts que no lo tienen

cd src/content/blog/es

for file in consejos-programadores-p1.md consejos-programadores-p2.md consejos-programadores-p3.md \
            mi-historia-developer.md recursos-gratis-programacion.md que-es-una-api.md \
            power-automate-pasoapaso.md herramientas-mejorar-p1.md porque-un-blog.md \
            django-vs-flask.md herramientas-mejorar-leetcode.md herramientas-mejorar-p2.md \
            integracion-transbank-tutorial.md; do
    
    if [ -f "$file" ]; then
        # Verificar si ya tiene el campo languages
        if ! grep -q "^languages:" "$file"; then
            echo "Agregando languages a $file..."
            # Agregar languages después de tags
            sed -i '/^tags:/a languages: []' "$file"
        else
            echo "$file ya tiene el campo languages"
        fi
    fi
done

echo "¡Listo!"
