/// <reference lib="webworker" />

import apiData from '../../../api/data.json';
import { Plan } from '../types/plan';

addEventListener('message', ({ data }) => {
  const sortFn = getSortFn(data.orderBy);

  const result = apiData.offers.sort((a, b) => sortFn(a as Plan, b as Plan));

  postMessage({offers: result, totalResults: result.length});
});

function getSortFn(orderBy: string) {
  switch (orderBy) {
    case 'name':
      return orderByName;
    case 'price':
      return orderByPrice;
    case 'download':
        return orderByDownload;
    case 'upload':
        return orderByUpload;
  }
}
function orderByName(plan1: Plan, plan2: Plan): number {
  return plan1.product.content.text > plan2.product.content.text ? 1 : -1;
}
function orderByPrice(plan1: Plan, plan2: Plan): number {
  return Number(plan1.cost.effectiveCost.amount) - Number(plan2.cost.effectiveCost.amount);
}
function orderByDownload(plan1: Plan, plan2: Plan): number {
  return Number(plan1.contractTerm.downloadSpeed.amount) - Number(plan2.contractTerm.downloadSpeed.amount);
}
function orderByUpload(plan1: Plan, plan2: Plan): number {
  return Number(plan1.contractTerm.uploadSpeed.amount) - Number(plan2.contractTerm.uploadSpeed.amount);
}

