import log from 'llog'

export default function (err) {
  if (err) throw err
  log.info('server listening')
}
