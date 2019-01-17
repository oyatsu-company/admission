
import { factory } from '@cinerino/api-javascript-client';
import { Action } from '@ngrx/store';
import { IDecodeResult } from '../../model';

/**
 * Action types
 */
export enum ActionTypes {
    Delete = '[User] User',
    GetTheaters = '[User] Get Theaters',
    GetTheatersSuccess = '[User] Get Theaters Success',
    GetTheatersFail = '[User] Get Theaters Fail',
    SelectTheater = '[User] Select Theater',
    GetScreeningEvents = '[User] Get Screening Events',
    GetScreeningEventsSuccess = '[User] Get Screening Events Success',
    GetScreeningEventsFail = '[User] Get Screening Events Fail',
    GetScreeningEvent = '[User] Get Screening Event',
    GetScreeningEventSuccess = '[User] Get Screening Event Success',
    GetScreeningEventFail = '[User] Get Screening Event Fail',
    SelectScreeningEvent = '[User] Select Screening Event',
    GetScreeningEventReservations = '[User] Get Screening Reservations',
    GetScreeningEventReservationsSuccess = '[User] Get Screening Events Reservations Success',
    GetScreeningEventReservationsFail = '[User] Get Screening Events Reservations Fail',
    InitializeQrcodeToken = '[User] Initialize Qrcode Token',
    InitializeUsentList = '[User] Initialize Usent List',
    ConvertQrcodeToToken = '[User] Convert Qrcode To Token',
    ConvertQrcodeToTokenSuccess = '[User] Convert Qrcode To Token Success',
    ConvertQrcodeToTokenFail = '[User] Convert Qrcode To Token Fail',
    Admission = '[User] Admission',
    AdmissionSuccess = '[User] Admission Success',
    AdmissionFail = '[User] Admission Fail'
}

/**
 * Delete
 */
export class Delete implements Action {
    public readonly type = ActionTypes.Delete;
    constructor(public payload: {}) { }
}

/**
 * GetTheaters
 */
export class GetTheaters implements Action {
    public readonly type = ActionTypes.GetTheaters;
    constructor(public payload: {
        params: factory.organization.ISearchConditions<factory.organizationType.MovieTheater>
    }) { }
}

/**
 * GetTheatersSuccess
 */
export class GetTheatersSuccess implements Action {
    public readonly type = ActionTypes.GetTheatersSuccess;
    constructor(public payload: { movieTheaters: factory.organization.IOrganization<factory.organizationType.MovieTheater>[] }) { }
}

/**
 * GetTheatersFail
 */
export class GetTheatersFail implements Action {
    public readonly type = ActionTypes.GetTheatersFail;
    constructor(public payload: { error: Error }) { }
}

/**
 * SelectTheater
 */
export class SelectTheater implements Action {
    public readonly type = ActionTypes.SelectTheater;
    constructor(public payload: { movieTheater: factory.organization.IOrganization<factory.organizationType.MovieTheater> }) { }
}

/**
 * GetScreeningEvent
 */
export class GetScreeningEvent implements Action {
    public readonly type = ActionTypes.GetScreeningEvent;
    constructor(public payload: { params: { id: string; } }) { }
}

/**
 * GetScreeningEventSuccess
 */
export class GetScreeningEventSuccess implements Action {
    public readonly type = ActionTypes.GetScreeningEventSuccess;
    constructor(public payload: { screeningEvent: factory.chevre.event.screeningEvent.IEvent }) { }
}

/**
 * GetScreeningEventFail
 */
export class GetScreeningEventFail implements Action {
    public readonly type = ActionTypes.GetScreeningEventFail;
    constructor(public payload: { error: Error }) { }
}

/**
 * GetScreeningEvents
 */
export class GetScreeningEvents implements Action {
    public readonly type = ActionTypes.GetScreeningEvents;
    constructor(public payload: { params: factory.chevre.event.screeningEvent.ISearchConditions }) { }
}

/**
 * GetScreeningEventsSuccess
 */
export class GetScreeningEventsSuccess implements Action {
    public readonly type = ActionTypes.GetScreeningEventsSuccess;
    constructor(public payload: { screeningEvents: factory.chevre.event.screeningEvent.IEvent[] }) { }
}

/**
 * GetScreeningEventsFail
 */
export class GetScreeningEventsFail implements Action {
    public readonly type = ActionTypes.GetScreeningEventsFail;
    constructor(public payload: { error: Error }) { }
}

/**
 * SelectScreeningEvent
 */
export class SelectScreeningEvent implements Action {
    public readonly type = ActionTypes.SelectScreeningEvent;
    constructor(public payload: { screeningEvent: factory.chevre.event.screeningEvent.IEvent }) { }
}

/**
 * GetScreeningEventReservations
 */
export class GetScreeningEventReservations implements Action {
    public readonly type = ActionTypes.GetScreeningEventReservations;
    constructor(public payload: { params: factory.chevre.reservation.event.ISearchConditions }) { }
}

/**
 * GetScreeningEventReservationsSuccess
 */
export class GetScreeningEventReservationsSuccess implements Action {
    public readonly type = ActionTypes.GetScreeningEventReservationsSuccess;
    constructor(public payload: {
        screeningEventReservations: factory.chevre.reservation.event.IReservation<factory.chevre.event.screeningEvent.IEvent>[]
    }) { }
}

/**
 * GetScreeningEventReservationsFail
 */
export class GetScreeningEventReservationsFail implements Action {
    public readonly type = ActionTypes.GetScreeningEventReservationsFail;
    constructor(public payload: { error: Error }) { }
}

/**
 * InitializeQrcodeToken
 */
export class InitializeQrcodeToken implements Action {
    public readonly type = ActionTypes.InitializeQrcodeToken;
    constructor(public payload?: {}) { }
}

/**
 * InitializeUsentList
 */
export class InitializeUsentList implements Action {
    public readonly type = ActionTypes.InitializeUsentList;
    constructor(public payload?: {}) { }
}

/**
 * ConvertQrcodeToToken
 */
export class ConvertQrcodeToToken implements Action {
    public readonly type = ActionTypes.ConvertQrcodeToToken;
    constructor(public payload: {
        params: {
            code: string;
            screeningEventReservations: factory.chevre.reservation.event.IReservation<factory.chevre.event.screeningEvent.IEvent>[];
        }
    }) { }
}

/**
 * ConvertQrcodeToTokenSuccess
 */
export class ConvertQrcodeToTokenSuccess implements Action {
    public readonly type = ActionTypes.ConvertQrcodeToTokenSuccess;
    constructor(public payload: {
        token?: string;
        decodeResult?: IDecodeResult;
        availableReservation?: factory.chevre.reservation.event.ISearchConditions;
        checkTokenActions: factory.action.check.token.IAction[];
        isAvailable: boolean;
        statusCode: number;
    }) { }
}

/**
 * ConvertQrcodeToTokenFail
 */
export class ConvertQrcodeToTokenFail implements Action {
    public readonly type = ActionTypes.ConvertQrcodeToTokenFail;
    constructor(public payload: { error: Error }) { }
}


/**
 * Admission
 */
export class Admission implements Action {
    public readonly type = ActionTypes.Admission;
    constructor(public payload: { token: string; decodeResult: IDecodeResult }) { }
}

/**
 * AdmissionSuccess
 */
export class AdmissionSuccess implements Action {
    public readonly type = ActionTypes.AdmissionSuccess;
    constructor(public payload: { token: string; decodeResult: IDecodeResult }) { }
}

/**
 * AdmissionFail
 */
export class AdmissionFail implements Action {
    public readonly type = ActionTypes.AdmissionFail;
    constructor(public payload: { error: Error, token: string; decodeResult: IDecodeResult }) { }
}

/**
 * Actions
 */
export type Actions =
    | Delete
    | GetTheaters
    | GetTheatersSuccess
    | GetTheatersFail
    | SelectTheater
    | GetScreeningEvent
    | GetScreeningEventSuccess
    | GetScreeningEventFail
    | GetScreeningEvents
    | GetScreeningEventsSuccess
    | GetScreeningEventsFail
    | SelectScreeningEvent
    | GetScreeningEventReservations
    | GetScreeningEventReservationsSuccess
    | GetScreeningEventReservationsFail
    | InitializeQrcodeToken
    | InitializeUsentList
    | ConvertQrcodeToToken
    | ConvertQrcodeToTokenSuccess
    | ConvertQrcodeToTokenFail
    | Admission
    | AdmissionSuccess
    | AdmissionFail;
