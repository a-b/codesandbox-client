import { Step, Plan, PaymentSummary, PaymentPreview } from './types';

type State = {
  selectedPlan: Plan | null;
  step: Step;
  seats: number;
  isPaddleInitialised: boolean;
  isBillingAmountLoaded: boolean;
  summary: PaymentSummary | null;
  paymentPreview: PaymentPreview | null;
  updatingSubscription: boolean;
};

export const state: State = {
  selectedPlan: null,
  step: Step.WorkspacePlanSelection,
  seats: 1,
  isPaddleInitialised: false,
  isBillingAmountLoaded: false,
  summary: null,
  paymentPreview: null,
  updatingSubscription: false,
};
