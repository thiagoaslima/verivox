// generated with https://app.quicktype.io/

export interface Plan {
  rank: string;
  provider: Provider;
  product: Product;
  contractTerm: PlanContractTerm;
  signup: Signup;
  campaign: Campaign;
  cost: Cost;
  remarks: Remark[];
  additionalOptions: AdditionalOptions;
  requiresAvailabilityCheck: string;
  files?: File[];
  hardwares?: Hardwares;
}

export interface AdditionalOptions {
  options: Option[];
  additionalOptionsCostExplanation: AdditionalOptionsCostExplanation;
}

export interface AdditionalOptionsCostExplanation {
  caption: Caption;
  content: Caption;
}

export interface Caption {
  text: string;
}

export interface Option {
  costsIncluded: string;
  type: OptionType;
  subType: SubType;
  optionId: string;
  isMandatory: string;
  caption: Caption;
  content: Caption;
  costDetails: OptionCostDetails;
  contractTerms: ContractTermElement[];
  shortRemark?: string;
  remark: string;
}

export interface ContractTermElement {
  canBeCancelled: string;
  baseFee: CampaignSavings;
  timeFrame: TimeFrame;
  cancellationPeriod?: CampaignSavings;
}

export interface CampaignSavings {
  amount: string;
  unit?: Unit;
  caption: Caption;
  content: Caption;
  type?: PurpleType;
  timeUnit?: Unit;
}

export enum Unit {
  Empty = '€',
  Eur = 'EUR',
  KbitS = 'kbit/s',
  Month = 'month',
  Week = 'week'
}

export enum PurpleType {
  BaseFeeOption = 'baseFeeOption',
  BaseFeePromo = 'baseFeePromo',
  BaseFeeStandard = 'baseFeeStandard',
  CashBack = 'cashBack',
  RecurringHardwareCost = 'recurringHardwareCost',
  SetupFee = 'setupFee',
  SetupFeeOption = 'setupFeeOption',
  ShippingCost = 'shippingCost',
  StartingBonus = 'startingBonus'
}

export interface TimeFrame {
  startMonth: string;
  endMonth: string;
}

export interface OptionCostDetails {
  oneTimeCost: CampaignSavings[];
  recurringCost: CampaignSavings[];
}

export enum SubType {
  ISDN = 'ISDN',
  InternetSecurityPack = 'InternetSecurityPack',
  Undefined = 'Undefined'
}

export enum OptionType {
  SecurityOption = 'SecurityOption',
  TelephonyOption = 'TelephonyOption'
}

export interface Campaign {
  campaignId: string;
  campaignEndDate: string;
  campaignSavingsTooltip: string;
  campaignSavings: CampaignSavings;
}

export interface PlanContractTerm {
  downloadSpeed: CampaignSavings;
  uploadSpeed: CampaignSavings;
  contractDuration: CampaignSavings;
  cancellationPeriod: CampaignSavings;
  prolongationPeriod: CampaignSavings;
  flatrates: Flatrates;
  trafficLimitation?: CampaignSavings;
}

export interface Flatrates {
  flatrates: AccessMode[];
}

export interface AccessMode {
  type: AccessModeType;
}

export enum AccessModeType {
  Cable = 'cable',
  DSL = 'dsl',
  FixedLine = 'fixedLine',
  Internet = 'internet'
}

export interface Cost {
  effectiveCost: CampaignSavings;
  costDetails?: CostCostDetails;
  calculationAfter24Months?: CalculationAfter24Months;
  totalCostExplanation?: AdditionalOptionsCostExplanation;
}

export interface CalculationAfter24Months {
  caption: Caption;
  content: PurpleContent;
  invoiceItems: CampaignSavings[];
}

export interface PurpleContent {}

export interface CostCostDetails {
  oneTimeCost: OneTimeCostClass;
  recurringCost: OneTimeCostClass;
  totalCostExplanation: AdditionalOptionsCostExplanation;
}

export interface OneTimeCostClass {
  totalCost: CampaignSavings;
  invoiceItems: CampaignSavings[];
}

export interface File {
  id: string;
  name: string;
  fileUsage: string;
  size: string;
  mimeType: string;
  url: string;
}

export interface Hardwares {
  hardwares: Hardware[];
  hardwareCostExplanation: AdditionalOptionsCostExplanation;
}

export interface Hardware {
  type: string;
  costsIncluded: string;
  priceAmount: string;
  id: string;
  eitherOr: string;
  isMandatory: string;
  costAmount25Month: string;
  name: AdditionalOptionsCostExplanation;
  price: AdditionalOptionsCostExplanation;
  remarks: ExplanationText;
  images: Image[];
  shortRemark?: string;
}

export interface Image {
  url: string;
}

export interface ExplanationText {
  caption: Caption;
  content: PurpleContent;
}

export interface Product {
  id: string;
  hasPhoneFlatrate: string;
  isTHomeAccess: string;
  isForStudents: string;
  positionZeroStatus: string;
  isSpecialOffer: string;
  isForBusinessCustomers: string;
  caption: Caption;
  content: Caption;
  accessModes: AccessModes;
  numberOfPhoneLines: string;
  numberOfPhoneNumbers: string;
}

export interface AccessModes {
  accessMode: AccessMode;
}

export interface Provider {
  id: string;
  logoUrl: string;
  caption: Caption;
  content: Caption;
  userRatings?: UserRatings;
}

export interface UserRatings {
  caption: Caption;
  content: Caption;
  additonalCustomerRatings: AdditonalCustomerRatings;
  switchAgain: SwitchAgain;
  explanationText: ExplanationText;
  recentUserRatings: RecentUserRating[];
}

export interface AdditonalCustomerRatings {
  caption: Caption;
  content: PurpleContent;
  service: Price;
  price: Price;
  switching: Price;
}

export interface Price {
  percent: string;
  caption: PriceContent;
  content: PriceContent;
}

export interface PriceContent {
  text?: string;
  tooltip: Tooltip;
}

export interface Tooltip {
  header: string;
  body: string;
}

export interface RecentUserRating {
  caption: PurpleContent;
  content: PurpleContent;
  comment: AdditionalOptionsCostExplanation;
  serviceScore: AdditionalOptionsCostExplanation;
  priceScore: AdditionalOptionsCostExplanation;
  switchScore: AdditionalOptionsCostExplanation;
  providerSwitchDateNote: LastModificationDateNote;
  wouldSwitchAgain: LastModificationDateNote;
  lastModificationDateNote: LastModificationDateNote;
}

export interface LastModificationDateNote {
  caption: PurpleContent;
  content: Caption;
}

export interface SwitchAgain {
  totalReviews: string;
  percent: string;
  providerBelongsToAProviderFamily: string;
  caption: Caption;
  content: Caption;
}

export interface Remark {
  type: RemarkType;
  isOneTimeBonusType: string;
  printHeaderInBold: string;
  highlightMode: string;
  caption: Caption;
  content: PriceContent;
}

export enum RemarkType {
  CashBack = 'cashBack',
  FlatrateIncluded = 'flatrateIncluded',
  Freetext = 'freetext',
  FreetextShoppingcart = 'freetextShoppingcart',
  General = 'general',
  TrafficLimitation = 'trafficLimitation'
}

export interface Signup {
  desktop?: Desktop;
  responsive?: Desktop;
  NoSignUp?: NoSignUp;
}

export interface NoSignUp {
  Header: string;
  Body: string;
  caption: Caption;
  content: Caption;
}

export interface Desktop {
  url: string;
  caption: Caption;
  content: Caption;
}
