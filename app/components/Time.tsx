interface TimeProps {
  date: Date;
}

const timeFormatter = new Intl.DateTimeFormat();
const relativeTimeFormatter = new Intl.RelativeTimeFormat(undefined, {
  style: "short"
});

const getRelativeTimeDiff = (date: Date, now = new Date()) => {
  const diffMilliseconds = now.getTime() - date.getTime();
  const absDiff = Math.abs(diffMilliseconds);

  if (absDiff < 60_000) {
    const diffSeconds = Math.floor(diffMilliseconds / 1_000);
    return relativeTimeFormatter.format(-diffSeconds, "second");
  } else if (absDiff < 3_600_000) {
    const diffMinutes = Math.floor(diffMilliseconds / 60_000);
    return relativeTimeFormatter.format(-diffMinutes, "minute");
  } else if (absDiff < 86_400_000) {
    const diffHours = Math.floor(diffMilliseconds / 3_600_000);
    return relativeTimeFormatter.format(-diffHours, "hour");
  }

  const diffDays = Math.floor(diffMilliseconds / 86_400_000);
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
