Crear proyecto TypeScript
   => init proyecto:
         $ tsc --init;
   => Ajuste tsconfig.json:
        "outDir": "./dis/js", // Directorio destino;
        "include": [ "./src/**/*.ts"], //Incluir todos los ts en src;
    => ejecutar ts: 
         $ ts --watch;
    => Excluir directorios
        "exclude": [
         "node_modules",
         "**/*.spec.ts"
        ]
