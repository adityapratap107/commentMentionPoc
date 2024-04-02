export const SUCCESS_STATUS_CODE = 200;
export const FORBIDDEN_STATUS_CODE = 403;
export const OTHER_STATUS_CODE = 300;

export enum EventStatusType {
    UnpublishedEventStatus = 10,
    PublishedEventStatus = 20,
    RePublishedEventStatus = 30,
  }

 export enum EventActionsType {
  StatusCancelled = 'Cancelled',
  StatusReleased = 'Released',
  StatusDeclined = 'Declined'
 } 