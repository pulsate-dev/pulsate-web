export interface TimeProps {
  date: Date;
}

const timeFormatter = new Intl.DateTimeFormat();
const relativeTimeFormatter = new Intl.RelativeTimeFormat(undefined, {
  style: "short"
});

const Millisecond = 1 as const;
const SECOND = Millisecond * 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const getRelativeTimeDiff = (date: Date, now = new Date()) => {
  const diffMilliseconds = now.getTime() - date.getTime();
  const absDiff = Math.abs(diffMilliseconds);

  if (absDiff < MINUTE) {
    const diffSeconds = Math.floor(diffMilliseconds / SECOND);
    return relativeTimeFormatter.format(-diffSeconds, "second");
  } else if (absDiff < HOUR) {
    const diffMinutes = Math.floor(diffMilliseconds / MINUTE);
    return relativeTimeFormatter.format(-diffMinutes, "minute");
  } else if (absDiff < DAY) {
    const diffHours = Math.floor(diffMilliseconds / HOUR);
    return relativeTimeFormatter.format(-diffHours, "hour");
  }

  const diffDays = Math.floor(diffMilliseconds / DAY);
  if (Math.abs(diffDays) < 30) {
    return relativeTimeFormatter.format(-diffDays, "day");
  }

  const diffMonths = Math.floor(diffDays / 30);
  if (Math.abs(diffMonths) < 12) {
    return relativeTimeFormatter.format(-diffMonths, "month");
  }

  const diffYears = Math.floor(diffMonths / 12);
  return relativeTimeFormatter.format(-diffYears, "year");
};

export const Time = ({ date }: TimeProps) => {
  const formattedDate = timeFormatter.format(date);
  const formattedRelativeDate = getRelativeTimeDiff(date);

  return (
    <p>
      {formattedDate} ({formattedRelativeDate})
    </p>
  );
};
