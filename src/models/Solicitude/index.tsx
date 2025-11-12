import type { HistoryDTO } from '@/models';
import type { UserSolicitudeDTO } from '@/models';

export interface SolicitudeTableDTO {
  id: number;
  title: string;
  sender: UserSolicitudeDTO;
  receiver: UserSolicitudeDTO;
  initHistory: HistoryDTO;
  lastHistory: HistoryDTO;
}

export const solicitudeTableDTO_IS: SolicitudeTableDTO[] = [];

export interface SolicitudeGetDTO {
  id: number;
  title: string;
  sender: UserSolicitudeDTO;
  receiver: UserSolicitudeDTO;
  histories: HistoryDTO[];
}
