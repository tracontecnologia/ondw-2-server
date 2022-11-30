export enum AsaasWebHookEventEnum {
  PAYMENT_CREATED = 'PAYMENT_CREATED', // - Geração de nova cobrança.
  PAYMENT_AWAITING_RISK_ANALYSIS = 'PAYMENT_AWAITING_RISK_ANALYSIS', // - Pagamento em cartão aguardando aprovação pela análise manual de risco.
  PAYMENT_APPROVED_BY_RISK_ANALYSIS = 'PAYMENT_APPROVED_BY_RISK_ANALYSIS', // - Pagamento em cartão aprovado pela análise manual de risco.
  PAYMENT_REPROVED_BY_RISK_ANALYSIS = 'PAYMENT_REPROVED_BY_RISK_ANALYSIS', // - Pagamento em cartão reprovado pela análise manual de risco.
  PAYMENT_UPDATED = 'PAYMENT_UPDATED', // - Alteração no vencimento ou valor de cobrança existente.
  PAYMENT_CONFIRMED = 'PAYMENT_CONFIRMED', // - Cobrança confirmada (pagamento efetuado, porém o saldo ainda não foi disponibilizado).
  PAYMENT_RECEIVED = 'PAYMENT_RECEIVED', // - Cobrança recebida.
  PAYMENT_OVERDUE = 'PAYMENT_OVERDUE', // - Cobrança vencida.
  PAYMENT_DELETED = 'PAYMENT_DELETED', // - Cobrança removida.
  PAYMENT_RESTORED = 'PAYMENT_RESTORED', // - Cobrança restaurada.
  PAYMENT_REFUNDED = 'PAYMENT_REFUNDED', // - Cobrança estornada.
  PAYMENT_RECEIVED_IN_CASH_UNDONE = 'PAYMENT_RECEIVED_IN_CASH_UNDONE', // - Recebimento em dinheiro desfeito.
  PAYMENT_CHARGEBACK_REQUESTED = 'PAYMENT_CHARGEBACK_REQUESTED', // - Recebido chargeback.
  PAYMENT_CHARGEBACK_DISPUTE = 'PAYMENT_CHARGEBACK_DISPUTE', // - Em disputa de chargeback (caso sejam apresentados documentos para contestação).
  PAYMENT_AWAITING_CHARGEBACK_REVERSAL = 'PAYMENT_AWAITING_CHARGEBACK_REVERSAL', // - Disputa vencida, aguardando repasse da adquirente.
  PAYMENT_DUNNING_RECEIVED = 'PAYMENT_DUNNING_RECEIVED', // - Recebimento de negativação.
  PAYMENT_DUNNING_REQUESTED = 'PAYMENT_DUNNING_REQUESTED', // - Requisição de negativação.
  PAYMENT_BANK_SLIP_VIEWED = 'PAYMENT_BANK_SLIP_VIEWED', // - Boleto da cobrança visualizado pelo cliente.
  PAYMENT_CHECKOUT_VIEWED = 'PAYMENT_CHECKOUT_VIEWED', // - Fatura da cobrança visualizada pelo cliente.
}
