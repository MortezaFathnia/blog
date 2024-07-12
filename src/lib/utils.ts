export function calculatingDate(id:number){
    const date = new Date();

    date.setDate(date.getDate() - id);
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    return dateFormatter.format(date)
}

