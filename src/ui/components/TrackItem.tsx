import clsx from 'clsx';
import { type TrackListItemOutput } from '../../dal/api';
import styles from './tracks.module.css';

type Props = {
  isSelected: boolean;
  onSelect: (trackId: string) => void;
  track: TrackListItemOutput;
};

export function TrackItem({ track, onSelect, isSelected }: Props) {
  return (
    <li
      className={clsx({
        [styles.track]: true,
        [styles.selected]: isSelected,
      })}>
      <div onClick={() => onSelect(track.id)}>{track.attributes.title}</div>
      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  );
}
