# Modelo de Dados para Gestão de Títulos Comerciais

## Visão Geral

Este documento descreve o modelo de dados para um sistema de gestão de títulos comerciais e participantes. O sistema é composto por várias tabelas interconectadas que armazenam informações sobre títulos comerciais, participantes, pagadores e terceiros autorizados.

## Tabelas

### 1. `asset_trade_bills`

Armazena informações sobre títulos comerciais.

| Coluna                  | Tipo    | Descrição                                                   |
|-------------------------|---------|-------------------------------------------------------------|
| `id`                    | INT     | Identificador único do título comercial (PK).              |
| `due_date`              | DATE    | Data de vencimento do título.                              |
| `nfe_number`            | VARCHAR | Número da nota fiscal eletrônica.                          |
| `nfe_series`            | VARCHAR | Série da nota fiscal eletrônica.                           |
| `kind`                  | VARCHAR | Tipo do título comercial.                                 |
| `state`                 | VARCHAR | Estado atual do título.                                   |
| `payer_id`              | INT     | Identificador do pagador (FK para `participants.id`).       |
| `endorser_original_id`  | INT     | Identificador do endossador original (FK para `participants.id`). |
| `new_due_date`          | DATE    | Nova data de vencimento, se alterada.                      |
| `participant_id`        | INT     | Identificador do participante (FK para `participants.id`). |
| `ballast_kind`          | VARCHAR | Tipo de lastro associado ao título.                        |
| `invoice_number`        | VARCHAR | Número da fatura associada.                                |
| `payment_place`         | VARCHAR | Local de pagamento do título.                              |
| `update_reason_kind`    | VARCHAR | Motivo da atualização, se aplicável.                       |
| `finished_at`           | DATETIME| Data e hora em que o título foi finalizado.                |

### 2. `participants`

Armazena informações sobre participantes envolvidos em transações.

| Coluna                       | Tipo    | Descrição                                                   |
|------------------------------|---------|-------------------------------------------------------------|
| `id`                         | INT     | Identificador único do participante (PK).                  |
| `name`                       | VARCHAR | Nome do participante.                                     |
| `state`                      | VARCHAR | Estado do participante.                                   |
| `contact_phone_number`       | VARCHAR | Número de telefone de contato.                            |
| `document_number`            | VARCHAR | Número do documento de identidade.                         |
| `authorized_third_party_id`  | INT     | Identificador do terceiro autorizado (FK para `participant_authorized_third_parties.id`). |
| `company_name`               | VARCHAR | Nome da empresa, se aplicável.                             |
| `kind`                       | VARCHAR | Tipo do participante.                                     |
| `paymaster_id`               | INT     | Identificador do pagador associado (FK para `paymasters.id`). |

### 3. `paymasters`

Armazena informações sobre entidades responsáveis por pagamentos.

| Coluna           | Tipo    | Descrição                                                   |
|------------------|---------|-------------------------------------------------------------|
| `id`             | INT     | Identificador único do pagador (PK).                       |
| `kind`           | VARCHAR | Tipo do pagador.                                           |
| `name`           | VARCHAR | Nome do pagador.                                           |
| `document`       | VARCHAR | Documento de identidade do pagador.                        |
| `email_primary`  | VARCHAR | Email principal do pagador.                                |
| `email_secondary`| VARCHAR | Email secundário do pagador.                               |
| `deleted_at`     | DATETIME| Data e hora em que o pagador foi marcado como excluído.    |
| `created_at`     | DATETIME| Data e hora em que o registro foi criado.                  |
| `updated_at`     | DATETIME| Data e hora da última atualização do registro.              |

### 4. `participant_authorized_third_parties`

Mantém o relacionamento entre participantes e terceiros autorizados.

| Coluna                      | Tipo    | Descrição                                                   |
|-----------------------------|---------|-------------------------------------------------------------|
| `id`                        | INT     | Identificador único do relacionamento (PK).                |
| `participant_id`            | INT     | Identificador do participante (FK para `participants.id`). |
| `authorized_third_party_id` | INT     | Identificador do terceiro autorizado (FK para `participants.id`). |
| `created_at`                | DATETIME| Data e hora em que o relacionamento foi criado.            |
| `updated_at`                | DATETIME| Data e hora da última atualização do relacionamento.        |
| `state`                     | VARCHAR | Estado do relacionamento.                                 |
| `approved_at`               | DATETIME| Data e hora em que o relacionamento foi aprovado.          |
| `rejected_at`               | DATETIME| Data e hora em que o relacionamento foi rejeitado.         |

### 5. `asset_parts`

Armazena informações sobre partes ou componentes de ativos.

| Coluna             | Tipo    | Descrição                                                   |
|--------------------|---------|-------------------------------------------------------------|
| `id`               | INT     | Identificador único da parte do ativo (PK).                |
| `name`             | VARCHAR | Nome da parte do ativo.                                   |
| `document_number`  | VARCHAR | Número do documento relacionado.                           |
| `contact_email`    | VARCHAR | Email de contato da parte do ativo.                        |
| `contact_phone_number` | VARCHAR | Número de telefone de contato.                             |
| `deleted_at`       | DATETIME| Data e hora em que a parte foi marcada como excluída.       |
| `created_at`       | DATETIME| Data e hora em que o registro foi criado.                  |
| `updated_at`       | DATETIME| Data e hora da última atualização do registro.              |
| `type`             | VARCHAR | Tipo da parte do ativo.                                   |

## Relacionamentos

1. **`asset_trade_bills` e `participants`:**
   - `payer_id`: Referencia o participante que é o pagador do título.
   - `endorser_original_id`: Referencia o participante que é o endossador original do título.
   - `participant_id`: Referencia um participante relacionado ao título.

2. **`participants` e `paymasters`:**
   - `paymaster_id`: Relaciona um participante a um pagador específico.

3. **`participants` e `participant_authorized_third_parties`:**
   - `authorized_third_party_id`: Relaciona um participante a um terceiro autorizado.

4. **`participant_authorized_third_parties`:**
   - `participant_id`: Referencia o participante que tem um terceiro autorizado associado.
   - `authorized_third_party_id`: Referencia o terceiro autorizado.

## Notas

- O modelo permite associar títulos comerciais a diferentes participantes em papéis específicos (pagador, endossador, participante).
- A tabela `paymasters` armazena informações sobre entidades responsáveis por pagamentos, que são referenciadas por participantes.
- A tabela `participant_authorized_third_parties` gerencia quais participantes têm terceiros autorizados que podem agir em seu nome.
