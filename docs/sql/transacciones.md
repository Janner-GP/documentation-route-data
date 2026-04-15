---
sidebar_position: 11
title: Transacciones
---

# Transacciones

Una transaccion es un conjunto de operaciones que deben ejecutarse como una sola unidad logica.

Si algo falla en medio del proceso, se puede revertir todo para no dejar datos inconsistentes.

## Comandos clave

- `BEGIN`
- `COMMIT`
- `ROLLBACK`

## Ejemplo

```sql
BEGIN;

UPDATE cuentas
SET saldo = saldo - 100
WHERE id = 1;

UPDATE cuentas
SET saldo = saldo + 100
WHERE id = 2;

COMMIT;
```

Si la segunda operacion falla, lo correcto seria hacer `ROLLBACK`.

## Propiedades ACID

- **Atomicidad**: todo o nada
- **Consistencia**: los datos mantienen reglas validas
- **Aislamiento**: las transacciones concurrentes no se interfieren mal
- **Durabilidad**: lo confirmado persiste

## Donde importan mucho

- Bancos y pagos
- Inventarios
- Reservas
- Procesos criticos de negocio
