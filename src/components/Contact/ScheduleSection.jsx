const SCHEDULE = [
  {
    id: 'schedule-lv',
    days: 'Lunes — Viernes',
    hours: '7:00 am – 9:00 pm',
    open: true,
    note: null,
  },
  {
    id: 'schedule-sa',
    days: 'Sábados',
    hours: '7:00 am – 9:00 pm',
    open: true,
    note: null,
  },
  {
    id: 'schedule-do',
    days: 'Domingos',
    hours: 'Solo redes sociales',
    open: false,
    note: '📱',
  },
]

function ScheduleSection() {
  // Build a simple "current time" indicator. Colombia = UTC-5.
  const nowHour = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Bogota' })).getHours()
  const nowDay = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Bogota' })).getDay() // 0=Sun

  const isOpenNow = () => {
    if (nowDay >= 1 && nowDay <= 6) return nowHour >= 7 && nowHour < 21
    return false
  }

  return (
    <section className="schedule-section" id="schedule">
      <div className="schedule-section__inner">
        <div className="schedule-section__header">
          <span className="section-eyebrow">HORARIOS</span>
          <h2>Horario de atención</h2>
          <div className={`schedule-status${isOpenNow() ? ' schedule-status--open' : ' schedule-status--closed'}`}>
            <span className="schedule-status__dot" />
            {isOpenNow() ? 'Abierto ahora' : 'Cerrado ahora'}
          </div>
        </div>

        <div className="schedule-grid">
          {SCHEDULE.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className={`schedule-card${!item.open ? ' schedule-card--closed' : ''}`}
            >
              <div className="schedule-card__days">{item.days}</div>
              <div className="schedule-card__divider" />
              <div className="schedule-card__hours">
                {item.note && <span className="schedule-card__note">{item.note} </span>}
                {item.hours}
              </div>
              {item.open && <div className="schedule-card__bar" />}
            </div>
          ))}
        </div>

        <p className="schedule-footer">
          Fuera de horario, nuestras redes sociales siguen activas 🙌
        </p>
      </div>
    </section>
  )
}

export default ScheduleSection
